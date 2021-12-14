const UserModel =require("../models/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const isEmail = require("validator/lib/isEmail");

const postNewUser = async(req,res)=>{
    const {email,userId,name,accessCode} = req.body

    if (!email || !accessCode || !userId || !name) {
        return res.status(401).json({msg: "All fields are required"})
    }

    if(!isEmail(email))return res.status(401).json({status: "fail",msg: "invalid email"})

    if(accessCode.length < 6)return res.status(401).json({status: "fail",msg: "password must be at least 6 char"})

    try {
        const user = await UserModel.findOne({userId:userId})

        if(user)return res.status(401).json({status: "fail",msg: "User already registered"})

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(accessCode,salt);

        const savedUser = await UserModel.create({
            name,
            email,
            userId:userId,
            accessCode:hashedPassword
        });

        const payload = {userid: savedUser._id}
        const authToken = await jwt.sign(payload,process.env.SECRETE,{expiresIn: '2d'})

        return res.status(200).json({
                status: "success",
                msg: "Authentication successful",
                token: authToken
    
            })
    } catch (err) {
        console.log(err);
        return res.status(500).json({status: "fail",msg: "Server Error"})
    }
}

module.exports = {postNewUser}