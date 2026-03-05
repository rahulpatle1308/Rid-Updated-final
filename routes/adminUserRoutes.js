const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");
const requireAdmin = require("../middleware/requireAdmin");

router.get("/users", requireAdmin, adminController.getAllUsers);

router.put("/user/:userType/:id", requireAdmin, adminController.updateUser);

router.delete("/user/:userType/:id", requireAdmin, adminController.deleteUser);
// open edit page
router.get("/user/edit/:userType/:id", requireAdmin, adminController.editUserPage);

// update from form
router.post("/user/update/:userType/:id", requireAdmin, adminController.updateUserFromForm);
module.exports = router;