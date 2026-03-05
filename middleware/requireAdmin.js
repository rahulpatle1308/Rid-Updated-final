const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

const requireAdmin = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.redirect("/admin/login");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const admin = await Admin.findById(decoded.id);

    if (!admin) {
      return res.redirect("/admin/login");
    }

    req.admin = admin;         // request me attach
    res.locals.admin = admin;  // views ke liye attach

    next();

  } catch (err) {
    console.log("Auth Error:", err.message);
    return res.redirect("/admin/login");
  }
};

module.exports = requireAdmin;