const express= require("express");
const router= express.Router();
const User=require("../models/User")
const sendemail= require("../middleware/sendmail")
let  otp=null;

router.post("/sendmail",async(req,res)=>{
    try {
        const {email}= req.body;
        const finduer= await User.findOne({email})
        if(finduer){
            return res.status(400).json({"error":"This email alredy have a account","auth":false})
        }
        otp= Math.floor((Math.random() * 1000000) + 1);
        sendemail(email,otp);
        return res.status(200).json({"message":"send mail","mess":true})
        
    } catch (error) {
        console.log(error)
        res.status(505).json({"error":"Internal server error"})
    }
    
})
module.exports=router;