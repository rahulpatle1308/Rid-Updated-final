const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    phone: String,
    role: String,

    // 🔥 ADD THIS
    otp: { type: String },
    otpExpiry: { type: Date }
  },
  { timestamps: true }
);


module.exports = mongoose.model("User", userSchema);
