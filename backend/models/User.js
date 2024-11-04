const { default: mongoose } = require('mongoose');
const mogoose = require('mongoose');

const UserSchema = new mogoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    CartData:{
        type:Object
    },
    Date:{
        type:Date,
        default:Date.now,
    }

})

const User = mongoose.model("User",UserSchema);
module.exports = User;