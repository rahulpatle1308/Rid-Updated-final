const mongoose = require("mongoose");

const courseVisitSchema = new mongoose.Schema({
  courseId: { type: String, required: true, unique: true },
  visits: { type: Number, default: 0 },
});

module.exports = mongoose.model("CourseVisit", courseVisitSchema);
