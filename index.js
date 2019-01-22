require("dotenv").config();

var express = require("express");
var cookieParser = require('cookie-parser')
var bodyParser = require("body-parser");
const session = require('express-session');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/practice',{useNewUrlParser:true})
var csurf = require('csurf')
var methodOverride = require("method-override");

var authRouter = require("./routes/auth.route")

var authMiddleware=require("./middleware/auth.middleware")

var app = express();
app.use(cookieParser())

// app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(methodOverride('_method'));

var port = process.env.PORT||3002;


app.set('view engine', 'ejs');
app.set("views", "./views");
app.use(express.static("public"));


 app.use(bodyParser.json())


app.use(bodyParser.urlencoded({ extended: false }))

// app.use(sessionMiddleware);



app.use("/",authRouter)
app.listen(port, function() {
    console.log(port + " is running")
})