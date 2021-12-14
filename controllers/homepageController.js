const UserModel =require("../models/UserModel");

const getPosts = async(req,res)=>{
    const {userid} = req;
    try {  
        const user = await UserModel.findById(userid);
        return res.status(200).json({user})
    } catch (error) {
        console.log(error);
        return res.status(500).send("Server Error")
    }
}

module.exports = getPosts;