const express = require("express");
const router = express.Router();

const controller = require("../controllers/signUpController")

const{postNewUser}=controller;

router.post("/",postNewUser)


module.exports = router;
