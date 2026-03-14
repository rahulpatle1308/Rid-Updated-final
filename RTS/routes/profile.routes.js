const express = require('express');
const router = express.Router();
const { requireAuth } = require('../middleware/auth');
const upload = require('../middleware/upload');
const profileController = require('../controllers/dashboard.controller');

// ✅ Profile Photo Routes
router.post('/profile/photo', 
    requireAuth, 
    upload.single('profilePhoto'), 
    profileController.uploadProfilePhoto
);

router.delete('/profile/photo', 
    requireAuth, 
    profileController.removeProfilePhoto
);

// ✅ Edit Profile Routes
router.get('/profile/edit', 
    requireAuth, 
    profileController.getEditProfilePage
);

router.put('/profile', 
    requireAuth, 
    profileController.updateProfile
);

module.exports = router;