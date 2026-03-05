const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema({
  offerId: { type: String, unique: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  dob: { type: Date, required: true },
  issueDate: { type: Date, required: true },   // ✅ Added Issue Date
  doj: { type: Date, required: true },
  project: { type: String, required: true },
  duration: { type: String, required: true },
  workMode: { type: String, required: true },
  status: { type: String, default: "Pending" },
  pdfPath: String
}, { timestamps: true });

module.exports = mongoose.model("OfferLetter", offerSchema);