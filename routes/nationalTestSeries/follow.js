const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Teacher = require("../../models/Teacher");
const User = require("../../models/user");
const TeacherTest = require("../../models/teacherTestModel");


// ================= FOLLOW / UNFOLLOW =================
router.post("/follow/:targetId", async (req, res) => {
  try {
    const userId = req.session.userId;
    const targetId = req.params.targetId;

    if (!userId) {
      return res.status(401).json({ success: false });
    }

    if (userId.toString() === targetId.toString()) {
      return res.json({ success: false, msg: "You cannot follow yourself" });
    }

    // 👉 current user
    let currentUser =
      await User.findById(userId) || await Teacher.findById(userId);

    // 👉 target user
    let targetUser =
      await User.findById(targetId) || await Teacher.findById(targetId);

    if (!currentUser || !targetUser) {
      return res.status(404).json({ success: false });
    }

    // 🔥 SAFE INIT
    currentUser.following = currentUser.following || [];
    targetUser.followers = targetUser.followers || [];

    const alreadyFollow = targetUser.followers.some(
      id => id.toString() === userId.toString()
    );

    if (alreadyFollow) {
      // ❌ UNFOLLOW
      targetUser.followers = targetUser.followers.filter(
        id => id.toString() !== userId.toString()
      );

      currentUser.following = currentUser.following.filter(
        id => id.toString() !== targetId.toString()
      );

    } else {
      // ✅ FOLLOW
      targetUser.followers.push(userId);
      currentUser.following.push(targetId);
    }

    await currentUser.save();
    await targetUser.save();

    res.json({
      success: true,
      following: !alreadyFollow,
      count: targetUser.followers.length
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false });
  }
});

// ================= MY FOLLOWERS =================
router.get("/teacher/followers", async (req, res) => {
  try {
    const userId = req.session.userId;

    let profileUser = await Teacher.findById(userId)
      .populate("followers", "name email");

    if (!profileUser) {
      profileUser = await User.findById(userId)
        .populate("followers", "name email");
    }

    if (!profileUser) {
      return res.send("User not found ❌");
    }

    res.render("NationalTestSeries/Follower/FollowerTeacher", {
      teacher: profileUser,
      followers: profileUser.followers || [],
      tests: []
    });

  } catch (err) {
    console.log(err);
    res.send("Error");
  }
});


// ================= PROFILE PAGE =================
router.get("/profile/:id", async (req, res) => {
  try {
    const profileId = req.params.id;

    // 🔍 FIND USER / TEACHER
    let profileUser = await Teacher.findById(profileId)
      .populate("followers", "name email");

    if (!profileUser) {
      profileUser = await User.findById(profileId)
        .populate("followers", "name email");
    }

    if (!profileUser) {
      return res.send("User not found ❌");
    }

    // 🔥 FINAL FIX (ObjectId important)
  const tests = await TeacherTest.find({
  createdBy: profileId
}).sort({ createdAt: -1 });

    console.log("PROFILE:", profileUser.name);
    console.log("TEST COUNT:", tests.length);

    res.render("NationalTestSeries/Follower/FollowerTeacher", {
      teacher: profileUser,
      followers: profileUser.followers || [],
      tests
    });

  } catch (err) {
    console.log("PROFILE ERROR:", err);
    res.send("Error");
  }
});


module.exports = router;