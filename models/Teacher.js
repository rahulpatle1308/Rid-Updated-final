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

    otp: { type: String },
    otpExpiry: { type: Date },

    // 🔥 ADD THIS (VERY IMPORTANT)
    viewHistory: [
      {
        test: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "TeacherTest"
        },
        viewedAt: {
          type: Date,
          default: Date.now
        }
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.models.Teacher || mongoose.model("Teacher", teacherSchema);