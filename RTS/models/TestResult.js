const mongoose = require("mongoose");

const TestResultSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  category: {          // ⭐ ADD THIS
    type: String,
    required: true
  },

  subject: {
    type: String,
    required: true
  },

  setNo: {
    type: Number,
    required: true
  },

  totalQuestions: {
    type: Number,
    required: true
  },

  attempted: {
    type: Number,
    default: 0
  },

  correct: {
    type: Number,
    default: 0
  },

  percentage: {
    type: Number,
    default: 0
  },

  accuracy: {
    type: Number,
    default: 0
  },

  timeSpent: {
    type: String
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("TestResult", TestResultSchema);
