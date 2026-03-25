// const User = require('../models/User');
const User = require("../../models/user");
const TestResult = require("../../models/TestResult");


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
        const { fullName, mobile, phone, dob, state, district, city } = req.body;

        const user = await User.findById(req.session.userId);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        // ✅ FIXED FIELD MAPPING
        if (fullName) user.name = fullName.trim();   // 🔥 CHANGE
       

const finalMobile = mobile || phone;

if (finalMobile) {
    if (!/^\d{10}$/.test(finalMobile)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid mobile number'
        });
    }
    user.phone = finalMobile;   // ✅ FIXED
}

        if (dob) user.dob = dob;
        if (state) user.state = state.trim();
        if (district) user.district = district.trim();
        if (city) user.city = city.trim();
        await user.save();

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



exports.getDashboard = async (req, res) => {
  res.render("dashboard/Dashboard", {
    title: "Dashboard",
    user: req.user,   // 🔥 IMPORTANT
    apiBaseUrl: "http://localhost:9191/api/course"
  });
};

// exports.getProfilePage = async (req, res) => {
//   try {
//     if (!req.session.userId) return res.redirect("/login");

//     const user = await User.findById(req.session.userId)
//       .populate({
//         path: "testHistory.resultId",
//         select: "percentage correct totalQuestions"
//       })
//       .select("-password");

//     if (!user) {
//       req.session.destroy();
//       return res.redirect("/login");
//     }

//     const totalTests = user.testHistory?.length || 0;

//     const bestScore = totalTests > 0
//       ? Math.max(...user.testHistory.map(t => t.percentage || 0))
//       : 0;

//     const averageScore = totalTests > 0
//       ? Math.round(
//           user.testHistory.reduce((sum, t) => sum + (t.percentage || 0), 0) /
//           totalTests
//         )
//       : 0;

//     // ⭐ Rank calculation
//     const betterUsers = await User.countDocuments({
//       averageScore: { $gt: averageScore }
//     });

//     const rank = betterUsers + 1;

//     res.render("dashboard/profile", {
//       title: "My Profile",
//       user,
//       totalTests,
//       bestScore,
//       averageScore,
//       rank
//     });

//   } catch (err) {
//     console.error("❌ PROFILE ERROR:", err);
//     res.status(500).render("error", {
//       title: "Error",
//       message: "Could not load profile"
//     });
//   }
// };
// ✅ Dashboard Stats

exports.getProfilePage = async (req, res) => {
  try {
    if (!req.session.userId) return res.redirect("/login");

    // ✅ Get user WITH testHistory
    const user = await User.findById(req.session.userId)
      .populate("testHistory.resultId")
      .select("-password");

    if (!user) {
      req.session.destroy();
      return res.redirect("/login");
    }

    // ✅ TOTAL TESTS (FIXED 🔥)
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

const betterUsers = await User.countDocuments({
  averageScore: { $gt: averageScore }
});

const rank = betterUsers + 1;

// ✅ ADD THIS
const certificateUnlocked = totalTests >= 30;
const techCount = user.techInterviewCount || 0;
res.render("dashboard/profile", {
  title: "My Profile",
  user,
  totalTests,
  bestScore,
  averageScore,
  rank,
  certificateUnlocked,
  techCount   // ✅ ADD THIS
});
  } catch (err) {
    console.error("❌ PROFILE ERROR:", err);
    res.status(500).render("error", {
      title: "Error",
      message: "Could not load profile"
    });
  }
};
exports.getStats = async (req, res) => {
  try {
    const count = await TestResult.countDocuments({
      user: req.session.userId
    });

    res.json({
      success: true,
      tests: count
    });
  } catch (err) {
    res.status(500).json({ success: false });
  }
};

// ✅ Change Password
exports.changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;

    const user = await User.findById(req.session.userId);
    if (!user) return res.status(404).json({ success: false });

    const isMatch = await require("bcryptjs").compare(oldPassword, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Wrong old password" });
    }

    user.password = await require("bcryptjs").hash(newPassword, 10);
    await user.save();

    res.json({ success: true, message: "Password changed" });
  } catch (err) {
    res.status(500).json({ success: false });
  }
};