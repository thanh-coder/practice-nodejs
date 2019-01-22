var mongoose=require("mongoose");
var userSchema= new mongoose.Schema(
    {
        email:String,
        password:String,
        phone:String,
        lastname:String,
        firstname:String,
        student:{
            type : Boolean, 
            default : false
        },
        teacher :{
            type : Boolean,
            default : false
        }
    }
)
//ma hoa mat khau
userSchema.methods.encryptPassword = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
}

// Giải mã mật khẩu
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}

var User=mongoose.model("User",userSchema,"users");
module.exports=User;