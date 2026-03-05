const nodemailer = require("nodemailer");

const sendOfferEmail = async (to, pdfPath) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD
      }
    });

    await transporter.sendMail({
      from: process.env.SMTP_USERNAME,
      to,
      subject: "Your Offer Letter - RID Bharat",
      text: "Congratulations! Your Offer Letter is attached.",
      attachments: [
        {
          filename: "OfferLetter.pdf",
          path: pdfPath
        }
      ]
    });

    console.log("Email Sent Successfully");
  } catch (err) {
    console.log("Email Error:", err);
  }
};

module.exports = sendOfferEmail;