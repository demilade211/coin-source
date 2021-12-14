const jwt = require("jsonwebtoken");

const auth = (req,res,next)=>{
    try {
        if(!req.headers.authorization){
            return res.status(401).send("Unauthorized")
        }
        const {userid}=jwt.verify(req.headers.authorization,process.env.SECRETE);
        req.userid = userid;
        next(); 
    } catch (error) {
        console.log(error);
        return res.status(401).send("Unauthorized")
    }
}

module.exports = auth;