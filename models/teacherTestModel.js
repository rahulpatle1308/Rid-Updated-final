const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  text: String,
  type: String,
  points: { type: Number, default: 1 },

  options: [
    {
      text: String,
      isCorrect: Boolean
    }
  ]
});

const teacherTestSchema = new mongoose.Schema({

  // 🔥 MAIN CHANGE
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: "creatorModel"
  },

  creatorModel: {
    type: String,
    enum: ["Teacher", "User"],
    required: true
  },

  name: String,
  subject: String,
  duration: Number,
  description: String,

  // 🔥 PUBLIC / PRIVATE
  visibility: {
    type: String,
    enum: ["private", "public"],
    default: "private"
  },

  status: {
    type: String,
    enum: ["pending", "published"],
    default: "pending"
  },

  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },

  likedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ],

  questions: [questionSchema],

  createdAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model("TeacherTest", teacherTestSchema);