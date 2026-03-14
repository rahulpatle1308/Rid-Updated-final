const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "./public/uploads/profile",
  filename: (req, file, cb) => {
    cb(null, req.session.userId + path.extname(file.originalname));
  }
});

module.exports = multer({ storage });
