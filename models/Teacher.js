const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    phone: String,
    role: String,

    profileImage: {
      type: String,
      default: ""
    },

    // 🔥 ADD THIS
    otp: { type: String },
    otpExpiry: { type: Date }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Teacher", teacherSchema);
