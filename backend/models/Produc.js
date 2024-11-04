const mongoose = require('mongoose');

export const product = mongoose.model("Product",{      
    id:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    }
})


