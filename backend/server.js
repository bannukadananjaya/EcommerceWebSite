//create webservers
//define routes
//handle http requests and responses
//manage middleware
const express = require("express");
//provide schema based modeling
//define schemas, models and interact with mongodb database
//simplified tasks like datavalidation, quering and managingrelationships between data
const colors = require('colors')
// const mongoose = require("mongoose");
// const {Schema} = mongoose;
const connectDB = require('./config/db')
//Database Connection with MongoDB localhost
connectDB()
//jet used for authontication and authorization tasks
//create jwt based on payload and sign them using a secret key and later verify their authenticity
const jwt = require("jsonwebtoken");
//used as a middleware for uploading files
//
const multer = require("multer");
//import path from nodejs standard library
//Resolving relative paths to absolute paths.
//Checking if paths are absolute or relative.
//Parsing paths into their individual components.
const path = require("path");
//cross origin resource sharing
//This enables your server to respond appropriately to cross-origin requests by setting the necessary HTTP headers to allow or restrict access from different origins.
const cors = require("cors");
const { connected } = require("process");
const port = 4000;

const app = express();
//This middleware is used to parse incoming requests with JSON payloads.
//It automatically parses the JSON data sent in the body of incoming HTTP requests and makes the parsed data available under the req.body property of the request object.
// It is typically used to handle requests in APIs where clients send JSON data as part of their requests.
//handle req
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/products',require('./routes/productRoutes'))
// const productSchema = new Schema({
//   id: {
//     type:Number,
//     required:true,
//   },
//   name:String,
//   image:String,
//   category:String,
//   new_price:String,
//   old_price:String,
//   comments:[{
//     body:String,
//     date:Date,
//   }],
//   date:{type:Date,default:Date.now},
//   hidden:Boolean,
// })

// const Product = mongoose.model('Product',productSchema)

// app.post('/addproduct',async(req,res)=>{
//   // try{
//     const product = new Product({
//       id:req.body.id,
//       name:req.body.name,
//       image:req.body.image,
//       category:req.body.category,
//       new_price:req.body.new_price,
//       old_price:req.res.old_price,
//     })
//     console.log(product)
//     await product.save()
//     console.log("Saved")
//     res.json({
//       success:true,
//       name:req.body.name,
//     })
//   // }catch(e){
//   //   res.json("error happend",e)
//   // }
// })

app.get('/',(req,res)=>{
  res.send({
    "message":"OK",
  })
})

//image store
const storage = multer.diskStorage({
  destination:'./upload/images',
  filename:(req,file,cb)=>{
    return cb(null,`${file.filedname}_${Date.now()}${path.extname(file.originalname)}`)
  }
})
 
const upload  = multer({storage:storage})
app.use('/images',express.static('upload/images'))
//Create upload endpoint for images
app.post('/upload',upload.single('product'),(req,res)=>{
  res.json({
    sucess:1,
    image_url:''
  })
})
app.listen(port,(error)=>{
  if(!error){ 
    console.log(`Server is started on ${port}`)
  }else{
    console.log("Error :",error)
  }
})