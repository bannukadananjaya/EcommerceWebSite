const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  id: {
    type:Number,
    required:true,
  },
  name:String,
  image:String,
  category:String,
  new_price:String,
  old_price:String,
  comments:[{
    body:String,
    date:Date,
  }],
  date:{type:Date,default:Date.now},
  hidden:Boolean,
})

module.exports = mongoose.model('Product',productSchema)