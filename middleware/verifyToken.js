const jwt = require("jsonwebtoken"); // ✅ CommonJS

const verifyToken = (req, res, next) => {
  const token =
    req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized - no token provided",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized - invalid token",
      });
    }

    req.userId = decoded.userId;
    req.role = decoded.role;

    next();
  } catch (error) {
    console.log("Error in verifyToken:", error);

    return res.status(403).json({
      success: false,
      message: "Forbidden - invalid token",
    });
  }
};

module.exports = verifyToken; // ✅ VERY IMPORTANT