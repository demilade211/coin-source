const express = require("express");
const router = express.Router();
const authMiddleware =require("../middlewares/authMiddleware");

const getPosts = require("../controllers/homepageController")


router.get("/",authMiddleware,getPosts)

module.exports = router;