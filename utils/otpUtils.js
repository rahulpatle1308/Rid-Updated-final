const User = require("../models/user");
const Teacher = require("../models/Teacher");
const Organisation = require("../models/Organisation");

// 🔹 Find user in all collections
const findUserByEmail = async (email) => {
  let user = await User.findOne({ email });
  if (user) return user;

  user = await Teacher.findOne({ email });
  if (user) return user;

  user = await Organisation.findOne({ email });
  if (user) return user;

  return null;
};

// 🔹 Store OTP
const storeOTP = async (email, otp) => {
  try {
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000);

    const user = await findUserByEmail(email);

    if (!user) {
      throw new Error("User not found");
    }

    user.otp = otp.toString();
    user.otpExpiry = otpExpiry;

    await user.save();

    console.log("Stored OTP:", otp, "for", email);
  } catch (error) {
    console.error("Error storing OTP:", error.message);
    throw error;
  }
};

// 🔹 Validate OTP
const validateOTP = async (email, otp) => {
  try {
    const user = await findUserByEmail(email);

    if (!user) {
      console.log("User not found:", email);
      return false;
    }

    console.log("DB OTP:", user.otp);
    console.log("User OTP:", otp);

    if (user.otp !== otp.toString()) {
      return false;
    }

    if (user.otpExpiry < new Date()) {
      return false;
    }

    return true;
  } catch (error) {
    console.error("Error validating OTP:", error.message);
    return false;
  }
};

module.exports = {
  storeOTP,
  validateOTP,
  findUserByEmail
};