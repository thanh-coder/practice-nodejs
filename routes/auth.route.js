var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var authMiddleware=require("../middleware/auth.middleware")

var controller=require("./../controllers/auth.controller")

// var validate=require("../validate/validate")
var router = express.Router();

router.get("/",authMiddleware.requireAuth,controller.home)
router.get("/signup",controller.signup)
router.post("/signup",controller.postSignup)

router.get("/login",controller.login)
router.post("/login",controller.postLogin)
router.get("/logout",controller.logout)


module.exports = router