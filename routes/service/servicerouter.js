const express=require("express");
const router=express.Router();

router.get("/service",(req,res)=>{
    res.render("service/servicepage.ejs")
})

module.exports = router;