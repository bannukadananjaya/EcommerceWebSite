const Product = require('../models/Product');

const { trace } = require('../routes/userRoute');

const getAllProducts = async(req,res)=>{

}

const addProduct = async (req,res) => {
    try{
        // const {} = req.body;
        console.log(req.body);
        const product = new  Product({
            id:req.body.id,
            name:req.body.name, 
            image:req.body.image,
            category:req.body.category,
            new_price:req.body.new_price,
            old_price:req.body.old_price,
        })

        await product.save();
        console.log("Saved")
        res.status(201).json({success:true,name:req.body.name})

    }catch(err){
        console.log(err);
    }
}
const removeProduct = async(req,res) => {

    try{
        await Product.findOneAndDelete({id:req.body.id});
        console.log("Deleted");
        res.status(200).json({success:true,name:req.body.name})
    }catch(err){
        console.log(err);
    }
   

}

module.exports = {addProduct,removeProduct,getAllProducts}