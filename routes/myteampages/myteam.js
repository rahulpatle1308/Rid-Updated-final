const express=require("express")
const router=express.Router()

router.get("/myteam",(req,res)=>{
    res.render("myteampages/myteam.ejs")
})

module.exports = router;