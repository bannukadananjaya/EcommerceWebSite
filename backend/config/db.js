const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database Connected");
    }catch(err){
        console.log(err);
        process.exit();
    }
}

module.exports = connectDB;
// mongoose.connect('')