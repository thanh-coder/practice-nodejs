
var User = require("../models/user")
var md5=require("md5")



module.exports.signup= function(req, res) {
    res.render("signup")
}

module.exports.postSignup= async function(req, res) {
 const user =new User;
 user.firstname=req.body.firstNameInput;
 user.lastname=req.body.lastNameInput;
 user.email=req.body.emailInput;
 user.password=req.body.passwordInput;
 user.teacher=req.body.teacherInput ? true : false;
 user.student=req.body.studentInput ? true : false;
  const member = await user.save()
  console.log(member)
  res.cookie("userId",user.email)

  res.locals.member = user;
  res.redirect("/")
     
}

module.exports.login= function(req, res) {
    res.render("login")

}

module.exports.postLogin= async function(req, res) {

   var email= req.body.email;
   var password = req.body.password;
   console.log(req.body)
   try{
   const user = await User.find({email,password})
   if(user){
    res.cookie("userId",user[0].email)
        console.log(user);
       res.redirect("/")
   }
   }
   catch(e){
       console.log("failed login")
   }
  
   
}

module.exports.home= function(req, res) {
    
    res.render("index")
    
}

module.exports.logout= function(req, res) {
    res.clearCookie("userId");
    // res.cookie("userId", "", { expires: new Date(0),domain:'localhost', path: '/' });

    res.redirect("/login")
    
}