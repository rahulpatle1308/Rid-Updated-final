const User = require('../models/User');
const TestResult = require('../models/TestResult');


const fs = require('fs');
const path = require('path');

// ✅ UPLOAD PROFILE PHOTO
exports.uploadProfilePhoto = async (req, res) => {
    try {
        if (!req.session.userId) {
            return res.status(401).json({
                success: false,
                message: 'Not authenticated'
            });
        }

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: 'No file uploaded'
            });
        }

        const user = await User.findById(req.session.userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        //      old profile photo if exists
        if (user.profilePhoto) {
            const oldPhotoPath = path.join(__dirname, '../public', user.profilePhoto);
            if (fs.existsSync(oldPhotoPath)) {
                fs.unlinkSync(oldPhotoPath);
            }
        }

        //  Save new photo path
        const photoUrl = `/uploads/profiles/${req.file.filename}`;
        user.profilePhoto = photoUrl;
        await user.save();

        res.json({
            success: true,
            message: 'Profile photo uploaded successfully',
            photoUrl: photoUrl
        });

    } catch (error) {
        console.error('❌ UPLOAD PHOTO ERROR:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to upload photo'
        });
    }
};

// ✅ REMOVE PROFILE PHOTO
exports.removeProfilePhoto = async (req, res) => {
    try {
        const user = await User.findById(req.session.userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        // ✅ Delete file
        if (user.profilePhoto) {
            const photoPath = path.join(__dirname, '../public', user.profilePhoto);
            if (fs.existsSync(photoPath)) {
                fs.unlinkSync(photoPath);
            }
        }

        // ✅ Remove from database
        user.profilePhoto = null;
        await user.save();

        res.json({
            success: true,
            message: 'Profile photo removed successfully'
        });

    } catch (error) {
        console.error('❌ REMOVE PHOTO ERROR:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to remove photo'
        });
    }
};

// ✅ EDIT PROFILE PAGE
exports.getEditProfilePage = async (req, res) => {
    try {
        const user = await User.findById(req.session.userId).select('-password');
        if (!user) return res.redirect('/login');

        res.render('dashboard/edit-profile', {
            title: 'Edit Profile',
            user,
            success: req.query.success,
            error: req.query.error
        });

    } catch (error) {
        console.error('❌ EDIT PROFILE ERROR:', error);
        res.redirect('/profile');
    }
};

// ✅ UPDATE PROFILE INFO
exports.updateProfile = async (req, res) => {
    try {
        const { fullName, mobile, dob, state, district } = req.body;
        const user = await User.findById(req.session.userId);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        // Update fields
        if (fullName) user.fullName = fullName.trim();
        if (mobile) {
            if (!/^\d{10}$/.test(mobile)) {
                return res.status(400).json({
                    success: false,
                    message: 'Invalid mobile number'
                });
            }
            user.mobile = mobile;
        }
        if (dob) user.dob = dob;
        if (state) user.state = state.trim();
        if (district) user.district = district.trim();

        await user.save();

        // Update session
        req.session.userName = user.fullName;
        req.session.userMobile = user.mobile;

        res.json({
            success: true,
            message: 'Profile updated successfully'
        });

    } catch (error) {
        console.error('❌ UPDATE PROFILE ERROR:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to update profile'
        });
    }
};

/**
 * Change password
 */
exports.changePassword = async (req, res) => {
  try {
    if (!req.session.userId) {
      return res.status(401).json({ 
        success: false, 
        message: 'Not authenticated' 
      });
    }
    
    const { currentPassword, newPassword, confirmPassword } = req.body;
    
    // Validation
    if (!currentPassword || !newPassword || !confirmPassword) {
      return res.status(400).json({ 
        success: false, 
        message: 'All password fields are required' 
      });
    }
    
    if (newPassword !== confirmPassword) {
      return res.status(400).json({ 
        success: false, 
        message: 'New passwords do not match' 
      });
    }
    
    if (newPassword.length < 6) {
      return res.status(400).json({ 
        success: false, 
        message: 'New password must be at least 6 characters' 
      });
    }
    
    // Get user
    const user = await User.findById(req.session.userId);
    
    // Verify current password
    const bcrypt = require('bcryptjs');
    const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ 
        success: false, 
        message: 'Current password is incorrect' 
      });
    }
    
    // Hash new password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);
    await user.save();
    
    return res.json({
      success: true,
      message: 'Password changed successfully'
    });
    
  } catch (error) {
    console.error('❌ CHANGE PASSWORD ERROR:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
};

/**
 * Get dashboard statistics (example)
 */
exports.getStats = async (req, res) => {
  try {
    if (!req.session.userId) {
      return res.status(401).json({ 
        success: false, 
        message: 'Not authenticated' 
      });
    }
    
    // Example: Count total users (for admin dashboard)
    const totalUsers = await User.countDocuments();
    
    // Get recent users
    const recentUsers = await User.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select('fullName email createdAt');
    
    return res.json({
      success: true,
      stats: {
        totalUsers,
        recentUsers
      }
    });
    
  } catch (error) {
    console.error('❌ GET STATS ERROR:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
};


// exports.getDashboard = async (req, res) => {
//   try {
//     if (!req.session.userId) {
//       return res.redirect("/login");
//     }

//     const user = await User.findById(req.session.userId).select("-password");

//     if (!user) {
//       req.session.destroy();
//       return res.redirect("/login");
//     }

//    exports.getDashboard = (req, res) => {
//   res.render("dashboard/Dashboard", {
//     title: "Dashboard",
//     user: null,
//     apiBaseUrl: "http://localhost:9191/api/course"
//   });
// };
//   } catch (error) {
//     console.error("❌ DASHBOARD ERROR:", error);
//     res.status(500).render("error", {
//       title: "Server Error",
//       message: "Something went wrong"
//     });
//   }
// };

exports.getDashboard = (req, res) => {
  res.render("dashboard/Dashboard", {
    title: "Dashboard",
    user: null,
    apiBaseUrl: "http://localhost:9191/api/course"
  });
};

exports.getProfilePage = async (req, res) => {
  try {
    if (!req.session.userId) return res.redirect("/login");

    const user = await User.findById(req.session.userId)
      .populate({
        path: "testHistory.resultId",
        select: "percentage correct totalQuestions"
      })
      .select("-password");

    if (!user) {
      req.session.destroy();
      return res.redirect("/login");
    }

    const totalTests = user.testHistory?.length || 0;

    const bestScore = totalTests > 0
      ? Math.max(...user.testHistory.map(t => t.percentage || 0))
      : 0;

    const averageScore = totalTests > 0
      ? Math.round(
          user.testHistory.reduce((sum, t) => sum + (t.percentage || 0), 0) /
          totalTests
        )
      : 0;

    // ⭐ Rank calculation
    const betterUsers = await User.countDocuments({
      averageScore: { $gt: averageScore }
    });

    const rank = betterUsers + 1;

    res.render("dashboard/profile", {
      title: "My Profile",
      user,
      totalTests,
      bestScore,
      averageScore,
      rank
    });

  } catch (err) {
    console.error("❌ PROFILE ERROR:", err);
    res.status(500).render("error", {
      title: "Error",
      message: "Could not load profile"
    });
  }
};
