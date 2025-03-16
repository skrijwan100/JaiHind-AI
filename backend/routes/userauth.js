const express = require("express");
const router = express.Router();
const User = require("../models/User")
const sendemail = require("../middleware/sendmail")
const bcrypt = require("bcrypt");
// const { body, validationResult } = require('express-validator');
const cloudinary= require("../config/cloudinary")
const fs=require("fs")
const upload = require("../middleware/upload")
let otp = null;

router.post("/sendmail", async (req, res) => {
    try {
        const { email } = req.body;
        const finduer = await User.findOne({ email })
        if (finduer) {
            return res.status(400).json({ "error": "This email alredy have a account", "notauth":true  })
        }
        otp = Math.floor((Math.random() * 1000000) + 1);
        console.log(otp)
        sendemail(email, otp);
        return res.status(200).json({ "message": "send mail", "mess": true })

    } catch (error) {
        console.log(error)
        res.status(505).json({ "error": "Internal server error" })
    }

})
router.post("/verifyotp", async (req, res) => {
    try {
        const { userotp } = req.body;
        console.log(otp)
        // console.log(userotp, typeof(userotp))
        numotp = parseInt(userotp)
        // console.log(numotp, typeof(numotp))
        if (numotp == otp) {
            return res.status(200).json({ "verify": true })
        }
        return res.status(401).json({ "verify": false })
    } catch (error) {
        console.log(error)
        res.status(505).json({ "error": "Internal server error" })
    }
})
router.post("/register", upload.single("profilepic"), async (req, res) => {
    try {
        const { name, email, password } = JSON.parse(req.body.userDetails);
        console.log(name,email,password)
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }
        const cloudinaryResponse = await cloudinary.uploader.upload(req.file.path, {
            folder: "user_profiles", // Optional folder in Cloudinary
        });


        fs.unlinkSync(req.file.path);
        const imgurl = cloudinaryResponse.secure_url;
        const salt = await bcrypt.genSalt(12)
        const haspassword = await bcrypt.hash(password, salt)
        const user = await User({
            name: name,
            email: email,
            profilePic: imgurl,
            password: haspassword
        })
        await user.save()
        return res.status(200).json({ "message": "You register done", "auth": true })

    } catch (error) {
        console.log(error)
        return res.status(505).json({ "error": "Internal server error." })

    }

})
module.exports = router;