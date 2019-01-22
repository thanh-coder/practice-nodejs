var User=require("../models/user");
var mongoose =require("mongoose")
module.exports.requireAuth= async function(req,res,next){
    console.log(req.cookies.userId)
if(!req.cookies.userId){
    res.redirect("/login");
    return;
}
var user = await User.findOne({email:req.cookies.userId});
console.log(user);
if(!user){
    res.redirect("/login");
    return;
}
res.locals.member=user;
 next();
}