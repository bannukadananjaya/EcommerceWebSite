const express = require("express");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const dotenv = require('dotenv');
const { url } = require("inspector");
const { type } = require("os");
const connetDB = require('./config/db')

// import userRoute from './routes/userRoute';
const userRoute = require('./routes/userRoute');


dotenv.config();
connetDB();
const app = express();

app.use(express.json());
app.use(cors());

//Image storage engine

const storage = multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload = multer({storage:storage})

app.use('/images',express.static('upload/images'))
//creating upload Endpoint for images
app.post('/upload',upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

app.use('/user',userRoute);
app.get('/',(req,res)=>{
    res.send("Express is running");
})

//Test API
const port=process.env.PORT;
console.log(port);
app.listen(port,(err)=>{
    if(!err){
        console.log(`Server is running on port : ${port}`);
    }else{
        console.log("Error :"+err)
    }
})