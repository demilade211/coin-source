const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true// cant have more than one if this
    },
    name: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
        unique: true,
        trim: true,// no spaces
    },
    accessCode: {
        type: String,
        required: true,
        select: false
    },// feild is not going to show when called
    profilepicurl: {
        type: String,
        default: 'https://res.cloudinary.com/indersingh/image/upload/v1593464618/App/user_mklcpl.png'
    },
    role:{
        type:String,
        default: "user",
        enum:['user','admin']// specifies the only values that will be in role
    }
},
{timestamps: true}
);

module.exports = mongoose.model("User", UserSchema);