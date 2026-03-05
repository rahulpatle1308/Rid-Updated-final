const Offer = require("../models/OfferLetter");
const { v4: uuidv4 } = require("uuid");
const generateOfferLetterPDF = require("../utils/generatePDF"); // creative version
const sendOfferEmail = require("../utils/sendofferlatter");
const path = require("path");
const fs = require("fs");

exports.createOffer = async (req, res) => {
  try {
    const offerId = "OFF-" + uuidv4().slice(0, 6).toUpperCase();

    // 1️⃣ Create database record (Issue Date added)
    const offer = await Offer.create({
      offerId,
      fullName: req.body.fullName,
      email: req.body.email,
      dob: req.body.dob,
      issueDate: req.body.issueDate,   // ✅ Added here
      doj: req.body.doj,
      project: req.body.project,
      duration: req.body.durationNum + " " + req.body.durationUnit,
      workMode: req.body.workMode,
      status: "Pending"
    });

    // 2️⃣ Prepare PDF data (Issue Date added)
    const pdfData = {
      offerId: offer.offerId,
      fullName: offer.fullName,
      dob: offer.dob,
      issueDate: offer.issueDate,   // ✅ Added here
      doj: offer.doj,
      project: offer.project,
      durationValue: req.body.durationNum,
      durationUnit: req.body.durationUnit,
      workMode: offer.workMode
    };

    const offersDir = path.join(__dirname, "../public/offers");
    if (!fs.existsSync(offersDir)) {
      fs.mkdirSync(offersDir, { recursive: true });
    }

    const pdfPath = path.join(offersDir, `${offer.offerId}.pdf`);

    await generateOfferLetterPDF(pdfData, pdfPath);

    offer.pdfPath = pdfPath;
    await offer.save();

    await sendOfferEmail(offer.email, pdfPath);

    res.redirect("/admin/offer/list");

  } catch (err) {
    console.error("Error creating offer:", err);
    res.status(500).send("Error creating offer. Please check logs.");
  }
};

// The rest of your controller functions remain unchanged
exports.getAllOffers = async (req, res) => {
  const offers = await Offer.find();
  res.render("Admin/offerlatter/offer-list", { offers });
};

exports.verifyOffer = async (req, res) => {
  try {
    const updated = await Offer.findByIdAndUpdate(
      req.params.id,
      { status: "Verified" },
      { new: true } // return updated doc
    );

    if (!updated) {
      return res.send("Offer Not Found");
    }

    res.redirect("/admin/offer/list");

  } catch (err) {
    console.error("Verify Error:", err);
    res.status(500).send("Error verifying offer");
  }
};

exports.editForm = async (req, res) => {
  const offer = await Offer.findById(req.params.id);
  res.render("Admin/offerlatter/edit-offer", { offer });
};

exports.updateOffer = async (req, res) => {
  try {
    const updatedData = {
      fullName: req.body.fullName,
      email: req.body.email,
      dob: req.body.dob,
      issueDate: req.body.issueDate,
      doj: req.body.doj,
      project: req.body.project,
      duration: req.body.durationNum + " " + req.body.durationUnit,
      workMode: req.body.workMode,
      status: req.body.status
    };

    await Offer.findByIdAndUpdate(req.params.id, updatedData);

    res.redirect("/admin/offer/list");

  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating offer");
  }
};

exports.deleteOffer = async (req, res) => {
  try {
    await Offer.findByIdAndDelete(req.params.id);
    res.redirect("/admin/offer/list");   // ✅ Correct Route
  } catch (error) {
    console.error("Delete Error:", error);
    res.status(500).send("Error deleting offer");
  }
};