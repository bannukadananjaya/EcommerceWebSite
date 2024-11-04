const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({      
    id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true,
    },
    new_price:{
        type:String,
        required:true
    },
    old_price:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    available:{
        type:Boolean,
        default:true
    }

})

const Product = mongoose.model("Product",ProductSchema);
module.exports = Product;
