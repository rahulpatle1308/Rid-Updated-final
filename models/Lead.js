const mongoose = require("mongoose")

const leadSchema = new mongoose.Schema({
 name:String,
 email:String,
 phone:String,
 company:String,
 budget:String,
 timeline:String,
 description:String,
 page:String,
 createdAt:{
  type:Date,
  default:Date.now
 }
})

module.exports = mongoose.model("Lead",leadSchema)