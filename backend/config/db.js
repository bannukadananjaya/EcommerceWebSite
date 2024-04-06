const mongoose = require('mongoose')

const connectDB = async () => {
  try{
    await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce_App')
    console.log(`mongodb connected`.cyan.underline)
  }catch(error){
    console.log('Connetion error',error)
    process.exit(1)
  }
 
}

module.exports = connectDB;