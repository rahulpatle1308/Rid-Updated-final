const jwt = require("jsonwebtoken");

const requireAdmin = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No token"
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // ✅ CHECK ROLE
    if (decoded.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Not admin"
      });
    }

    req.userId = decoded.userId;
    req.role = decoded.role;

    next();

  } catch (err) {
    console.log("Admin Auth Error:", err.message);

    return res.status(403).json({
      success: false,
      message: "Invalid token"
    });
  }
};

module.exports = requireAdmin;