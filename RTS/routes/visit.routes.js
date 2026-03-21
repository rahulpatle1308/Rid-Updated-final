const express = require("express");
const router = express.Router();
const CourseVisit = require("../models/CourseVisit");

// increase visit
router.post("/visit/:id", async (req, res) => {
  try {
    const id = decodeURIComponent(req.params.id);

    const course = await CourseVisit.findOneAndUpdate(
      { courseId: id },
      { $inc: { visits: 1 } },
      { new: true, upsert: true }
    );

    res.json({ visits: course.visits });

  } catch (err) {
    console.error("Visit Error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// get all visits
router.get("/visits", async (req, res) => {
  try {
    const data = await CourseVisit.find();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;