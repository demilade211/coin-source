const express = require("express");
const router = express.Router();

const controller = require("../controllers/loginController")

const{loginUser}=controller;

router.post("/",loginUser)

module.exports = router;