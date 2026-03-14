const { body } = require("express-validator");

exports.registerValidator = [
  body("fullName").notEmpty().withMessage("Full name required"),
  body("email").isEmail().withMessage("Valid email required"),
  body("mobile")
    .notEmpty()
    .matches(/^\d{10}$/)
    .withMessage("Mobile must be 10 digits"),
  body("password").isLength({ min: 6 })
];
