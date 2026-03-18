const mongoose = require("mongoose");

const organisationSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    phone: String,
    role: String,
    organisationType: String,

    // 🔥 ADD THIS
    otp: { type: String },
    otpExpiry: { type: Date }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Organisation", organisationSchema);
