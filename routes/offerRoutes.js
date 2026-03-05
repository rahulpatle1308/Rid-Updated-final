const express = require("express");
const router = express.Router();
const offerController = require("../controllers/offerController");
const requireAdmin = require("../middleware/requireAdmin");

// Show Form
router.get("/create", requireAdmin, (req, res) => {
  res.render("Admin/offerlatter/offerlatter-form");
});

// Create Offer
router.post("/create", requireAdmin, offerController.createOffer);

// List Offers
router.get("/list", requireAdmin, offerController.getAllOffers);

// Verify
router.get("/verify/:id", requireAdmin, offerController.verifyOffer);

// Delete
router.post("/delete/:id", requireAdmin, offerController.deleteOffer);
// Edit Form
router.get("/edit/:id", requireAdmin, offerController.editForm);

// Update
router.post("/update/:id", requireAdmin, offerController.updateOffer);
module.exports = router;