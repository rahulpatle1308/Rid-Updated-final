const Certificate = require("../models/certificate");
const User = require("../models/user");
const multer = require("multer");
const Book = require("../models/ebookModel");
// Configure multer for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });
const addCertificate = async (req, res) => {
  const { certificateId, internName, issueDate, description } = req.body;
  const certificateFile = req.file.buffer;
  try {
    const newCertificate = new Certificate({
      certificateId,
      internName,
      issueDate,
      description,
      certificateFile,
    });
    await newCertificate.save();
    res.status(200).json({ message: "Certificate uploaded successfully" });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: "Certificate ID already exists" });
    } else {
      res.status(500).json({ message: "Failed to upload certificate" });
    }
  }
};
const getRegistrationsCount = async (req, res) => {
  try {
    const count = await User.countDocuments();
    res.status(200).json({ count });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch registrations count" });
  }
};
// Controller function to get the count of admins
const getAdminCount = async (req, res) => {
  try {
    const adminCount = await User.countDocuments({ role: "admin" });
    res.status(200).json({ count: adminCount });
  } catch (error) {
    res.status(500).json({ message: "Error fetching admin count" });
  }
};
const getStudentCount = async (req, res) => {
  try {
    const studentCount = await User.countDocuments({ role: "student" });
    res.status(200).json({ count: studentCount });
  } catch (error) {
    res.status(500).json({ message: "Error fetching student count" });
  }
};
const getTeacherCount = async (req, res) => {
  try {
    const teacherCount = await User.countDocuments({ role: "teacher" });
    res.status(200).json({ count: teacherCount });
  } catch (error) {
    res.status(500).json({ message: "Error fetching teacher count" });
  }
};
const getOrganisationCount = async (req, res) => {
  try {
    const organisationCount = await User.countDocuments({
      role: "organisation",
    });
    res.status(200).json({ count: organisationCount });
  } catch (error) {
    res.status(500).json({ message: "Error fetching organisation count" });
  }
};
const getEbooksCount = async (req, res) => {
  try {
    const count = await Book.countDocuments({ pdf: { $exists: true } });
    res.status(200).json({ count });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch eBook count" });
  }
};
const getPdfsCount = async (req, res) => {
  try {
    // Count documents where 'pdf.data' field exists
    const count = await Book.countDocuments({ "pdf.data": { $exists: true } });
    res.status(200).json({ count }); // Respond with the count
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch PDF count" });
  }
};

// user casses data 
const Teacher = require("../models/Teacher");
const Organisation = require("../models/Organisation");
const bcrypt = require("bcryptjs");


// ================= GET ALL USERS =================
const getAllUsers = async (req, res) => {
  try {

    const students = await User.find().lean();
    const teachers = await Teacher.find().lean();
    const organisations = await Organisation.find().lean();

    const allUsers = [
      ...students.map(u => ({ ...u, userType: "student" })),
      ...teachers.map(u => ({ ...u, userType: "teacher" })),
      ...organisations.map(u => ({ ...u, userType: "organisation" }))
    ];

    res.json(allUsers);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching users" });
  }
};


// ================= UPDATE USER =================
const updateUser = async (req, res) => {

  try {

    const { id, userType } = req.params;
    const { name, email, role, password } = req.body;

    let Model;

    if (userType === "student") Model = User;
    if (userType === "teacher") Model = Teacher;
    if (userType === "organisation") Model = Organisation;

    let updateData = {
      name,
      email,
      role
    };

    // 🔐 password only update if provided
    if (password && password.trim() !== "") {

      const hashedPassword = await bcrypt.hash(password, 10);

      updateData.password = hashedPassword;

    }

    await Model.findByIdAndUpdate(id, updateData);

    res.json({ success: true });

  } catch (error) {

    console.error(error);
    res.json({ success: false });

  }

};


// ================= DELETE USER =================
const deleteUser = async (req, res) => {

  try {

    const { id, userType } = req.params;

    let Model;

    if (userType === "student") Model = User;
    if (userType === "teacher") Model = Teacher;
    if (userType === "organisation") Model = Organisation;

    await Model.findByIdAndDelete(id);

    res.json({ success: true });

  } catch (error) {
    console.error(error);
    res.json({ success: false });
  }
};
// ================= OPEN EDIT PAGE =================

const editUserPage = async (req,res)=>{

  try{

    const {id,userType} = req.params;

    let Model;

    if(userType==="student") Model = User;
    if(userType==="teacher") Model = Teacher;
    if(userType==="organisation") Model = Organisation;

    const user = await Model.findById(id);

    res.render("Admin/users/edit-user",{
      user,
      userType
    });

  }catch(err){

    console.log(err);
    res.send("User not found");

  }

};



// ================= UPDATE FROM FORM =================
const updateUserFromForm = async (req,res)=>{

  try{

    const {id,userType} = req.params;
    const {name,email,role,password} = req.body;

    let Model;

    if(userType==="student") Model = User;
    if(userType==="teacher") Model = Teacher;
    if(userType==="organisation") Model = Organisation;

    let user = await Model.findById(id);

    if(!user){
      return res.send("User not found");
    }

    user.name = name;
    user.email = email;
    user.role = role;

    // 🔥 password change
    if(password && password.trim() !== ""){

      const hashedPassword = await bcrypt.hash(password,10);
      user.password = hashedPassword;

    }

    await user.save();

    res.redirect("/admin/dashboard");

  }catch(err){

    console.log(err);
    res.send("Update failed");

  }

};
module.exports = {
  addCertificate,
  getRegistrationsCount,
  getAdminCount,
  getStudentCount,
  getTeacherCount,
  getOrganisationCount,
  getEbooksCount,
  getPdfsCount,

  getAllUsers,
  updateUser,
  deleteUser,

  editUserPage,
  updateUserFromForm
};