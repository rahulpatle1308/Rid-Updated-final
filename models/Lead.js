const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({
  
  firstName: {
    type: String,
    required: true,
    trim: true
  },

  lastName: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },

  phone: {
    type: String,
    trim: true
  },

  company: {
    type: String,
    required: true,
    trim: true
  },

  message: {
    type: String,
    required: true
  },

  nda: {
    type: Boolean,
    default: true
  },

  page: {
    type: String, // kis page se aaya (services, home etc)
    default: "services"
  },

  createdAt: {
    type: Date,
    default: Date.now
  },
  nda: {
  type: Boolean,
  default: true
}

});

module.exports = mongoose.model("Lead", leadSchema);