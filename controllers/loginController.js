const UserModel =require("../models/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');


const loginUser = async(req,res)=>{
    const {userId,accessCode} = req.body

      // Checks if email and password is entered by user
    if (!userId || !accessCode) {
        return res.status(401).json({msg: "All fields are required"})
    }

    if(accessCode.length < 6)return res.status(401).json({msg: "password must be at least 6 char"})
    
    try {
        const user = await UserModel.findOne({userId:userId}).select("+accessCode")

        if(!user)  return res.status(400).json({msg: "Invalid Credentials"})

        const isMatch = await bcrypt.compare(accessCode,user.accessCode);
        if(isMatch){
            const payload = {
                userid: user._id
            }
            const authToken = await jwt.sign(payload,process.env.SECRETE,{expiresIn: '2d'})
            
            return res.status(200).json({
                msg: "Authentication successful Logged in",
                token: authToken
    
            })
        }
        return res.status(400).json({msg: "Invalid Credentials"})
    } catch (err) {
        console.log(err);
        return res.status(500).json({msg: "Server Error"})
    }
}

module.exports = {loginUser}