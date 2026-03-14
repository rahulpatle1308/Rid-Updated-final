const bcrypt = require('bcryptjs');
const User = require('../models/User');

/**
 * Register a new user
 */
exports.register = async (req, res) => {
  console.log('📥 REGISTER REQUEST BODY:', req.body);
  
  try {
    const { fullName, email, mobile, password, countryCode = "+91" } = req.body;
    
    // Step 1: Validation
    if (!fullName || !email || !mobile || !password) {
      console.log('❌ Missing required fields');
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }
    
    // Step 2: Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      console.log(`❌ User already exists with email: ${email}`);
      return res.status(400).json({ 
        success: false, 
        message: 'Email already registered. Please login.' 
      });
    }
    
    // Step 3: Check if mobile already exists
    const existingMobile = await User.findOne({ mobile });
    if (existingMobile) {
      console.log(`❌ Mobile number already registered: ${mobile}`);
      return res.status(400).json({ 
        success: false, 
        message: 'Mobile number already registered' 
      });
    }
    
    // Step 4: Hash password
    console.log(`🔐 Hashing password for: ${email}`);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    // Step 5: Create new user
    console.log(`🔄 Creating new user: ${email}`);
    const user = new User({
      fullName,
      email: email.toLowerCase(),
      mobile,
      countryCode,
      password: hashedPassword
    });
    
    // Step 6: Save to database
    const savedUser = await user.save();
    console.log(`✅ User saved to database: ${savedUser._id}`);
    
    // Step 7: Create session
    req.session.userId = savedUser._id;
    req.session.userEmail = savedUser.email;
    req.session.userName = savedUser.fullName;
    req.session.userMobile = savedUser.mobile;
    
    console.log(`✅ Session created for user: ${savedUser.email}`);
    
    // Step 8: Send response
    return res.json({ 
      success: true, 
      message: 'Registration successful!',
      user: {
        id: savedUser._id,
        name: savedUser.fullName,
        email: savedUser.email,
        mobile: savedUser.mobile
      },
    redirect: '/rts/login'


    });
    
  } catch (error) {
    console.error('❌ REGISTRATION ERROR DETAILS:', error);
    
    // Handle specific MongoDB errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      console.log(`❌ Validation Error: ${messages.join(', ')}`);
      return res.status(400).json({ 
        success: false, 
        message: messages.join(', ') 
      });
    }
    
    if (error.code === 11000) {
      console.log('❌ Duplicate key error (email already exists)');
      return res.status(400).json({ 
        success: false, 
        message: 'Email already registered' 
      });
    }
    
    // Generic error
    console.error('❌ Server Error during registration:', error.message);
    return res.status(500).json({ 
      success: false, 
      message: 'Internal server error. Please try again later.' 
    });
  }
};

/**
 * Login user
 */
exports.login = async (req, res) => {
  console.log('📥 LOGIN REQUEST BODY:', req.body);
  
  try {
    const { email, password } = req.body;
    
    // Step 1: Validation
    if (!email || !password) {
      console.log(' Missing email or password');
      return res.status(400).json({ 
        success: false, 
        message: 'Email and password are required' 
      });
    }
    
    // Step 2: Find user
    const user = await User.findOne({ email }).select("+password");

    
    // Step 3: Check password
    console.log(`🔑 Checking password for user: ${user.email}`);
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
      console.log(`Invalid password for: ${user.email}`);
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid email or password' 
      });
    }
    
    // Step 4: Update last login
    user.lastLogin = new Date();
    await user.save();
    console.log(`✅ Last login updated for: ${user.email}`);
    
    // Step 5: Create session
    req.session.userId = user._id;
    req.session.userEmail = user.email;
    req.session.userName = user.fullName;
    req.session.userMobile = user.mobile;
    
    console.log(`✅ Login successful. Session created for: ${user.email}`);
    
    // Step 6: Send response
    return res.json({ 
      success: true, 
      message: 'Login successful!',
      user: {
        id: user._id,
        name: user.fullName,
        email: user.email,
        mobile: user.mobile
      },
      redirect: '/rts/dashboard'

    });
    
  } catch (error) {
    console.error('❌ LOGIN ERROR DETAILS:', error);
    
    return res.status(500).json({ 
      success: false, 
      message: 'Internal server error. Please try again.' 
    });
  }
};

/**
 * Logout user
 */
exports.logout = (req, res) => {
  console.log(`🚪 Logging out user: ${req.session.userEmail || 'Unknown'}`);
  
  req.session.destroy((err) => {
    if (err) {
      console.error('❌ Error destroying session:', err);
      return res.status(500).json({ 
        success: false, 
        message: 'Logout failed' 
      });
    }
    
    res.clearCookie('rts.sid');
    console.log('✅ Logout successful');
    
    return res.json({ 
      success: true, 
      message: 'Logged out successfully',
      redirect: '/rts/login'

    });
  });
};

/**
 * Get current user profile
 */
exports.getProfile = async (req, res) => {
  try {
    if (!req.session.userId) {
      return res.status(401).json({ 
        success: false, 
        message: 'Not authenticated' 
      });
    }
    
    const user = await User.findById(req.session.userId).select('-password');
    
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }
    
    return res.json({ 
      success: true, 
      user 
    });
    
  } catch (error) {
    console.error('❌ GET PROFILE ERROR:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
};

/**
 * Check authentication status
 */
exports.checkAuth = (req, res) => {
  const isAuthenticated = !!req.session.userId;
  
  return res.json({
    success: true,
    isAuthenticated,
    user: isAuthenticated ? {
      id: req.session.userId,
      name: req.session.userName,
      email: req.session.userEmail,
      mobile: req.session.userMobile
    } : null
  });
};