const express = require("express");
const router = express.Router();
const Test = require("../../models/teacherTestModel");

// ===============================
// DELETE TEST (DATABASE SE)
// ===============================
router.delete("/:id/delete", async (req, res) => {
  try {
    const testId = req.params.id;

    const deletedTest = await Test.findByIdAndDelete(testId);

    if (!deletedTest) {
      return res.status(404).json({
        success: false,
        message: "Test not found"
      });
    }

    res.json({
      success: true,
      message: "Test deleted successfully"
    });

  } catch (error) {
    console.error("Delete Test Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error while deleting test"
    });
  }
});


// ===============================
// PUBLISH TEST
// ===============================
router.post("/:id/publish", async (req, res) => {
  try {
    const updated = await Test.findByIdAndUpdate(
      req.params.id,
      { status: "published" },
      { new: true }
    );

    res.json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});


// ===============================
// PENDING TEST
// ===============================
router.post("/:id/pending-status", async (req, res) => {
  try {
    const updated = await Test.findByIdAndUpdate(
      req.params.id,
      { status: "pending" },
      { new: true }
    );

    res.json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});


// ===============================
// ACTIVE TEST
// ===============================
router.post("/:id/active-status", async (req, res) => {
  try {
    const updated = await Test.findByIdAndUpdate(
      req.params.id,
      { status: "active" },
      { new: true }
    );

    res.json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;