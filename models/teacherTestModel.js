const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  testId: { type: mongoose.Schema.Types.ObjectId, ref: "Test" },

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
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher"
  },
  name: String,
  
  subject: String,
  duration: Number,
  difficulty: String,
  description: String,
  banner: {
    type: String,
    default: ""
},
  questions: [questionSchema],
  createdAt: {
    type: Date,
    default: Date.now
  }
  
});

module.exports = mongoose.model("TeacherTest", teacherTestSchema);
