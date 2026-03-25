const User = require('../../models/user');

// 🔐 Login required
const requireAuth = async (req, res, next) => {
  try {
    if (!req.session || !req.session.userId) {
  req.session.redirectTo = req.originalUrl;
  return res.redirect("/login");  // ✅ FIXED
}

    const user = await User.findById(req.session.userId);

    if (!user) {
      req.session.destroy();
      return res.redirect("/rts/login");
    }

    req.user = user;
    res.locals.user = user; // 🔥 EJS me use hoga

    next();
  } catch (err) {
    console.error("AUTH ERROR:", err);
    return res.redirect("/rts/login");
  }
};

// 🚫 Already logged in
const redirectIfAuth = (req, res, next) => {
  if (req.session && req.session.userId) {
    return res.redirect("/rts/dashboard");
  }
  next();
};

module.exports = {
  requireAuth,
  redirectIfAuth
};