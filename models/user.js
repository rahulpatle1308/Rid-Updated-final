const mongoose = require("mongoose");

const testHistorySchema = new mongoose.Schema({
  resultId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TestResult"
  },
  subject: String,
  setNo: Number,
  score: Number,
  totalQuestions: Number,
  percentage: Number,
  date: {
    type: Date,
    default: Date.now
  }
});

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    phone: String,
    role: String,

    // ✅ ADD THIS (VERY IMPORTANT)
    testHistory: [testHistorySchema],

    totalTestsAttempted: {
      type: Number,
      default: 0
    },

    averageScore: {
      type: Number,
      default: 0
    },

    otp: String,
    otpExpiry: Date
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);