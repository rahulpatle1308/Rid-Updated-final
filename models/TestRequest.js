const mongoose = require("mongoose");

const testRequestSchema = new mongoose.Schema({
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher"
  },

  banner: String,
notesFile: String,
  description: String,

  questionsText: String,

  status: {
    type: String,
    enum: ["pending", "approved"],
    default: "pending"
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("TestRequest", testRequestSchema);