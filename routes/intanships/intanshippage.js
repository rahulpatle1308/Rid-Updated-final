const express=require("express");
const router=express.Router()

router.get("/internship",(req,res)=>{
    console.log(req.body)
    res.render("Internship/inrtanship-pages.ejs")

})

module.exports= router


