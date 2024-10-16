const port = 4000;
const express = require("express");
const app =express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

//Datbase connection
mongoose.connect("mongodb://localhost:27017/ecommerce_App");

app.get('/',(req,res)=>{
    res.send("Express is running");
})

//Test API
app.listen(port,(err)=>{
    if(!err){
        console.log("Server is running"+port);
    }else{
        console.log("Error :"+err)
    }
})