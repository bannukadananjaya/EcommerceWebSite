const express = require('express');
const {addProduct,removeProduct,getAllProducts} = require('../controller/productController');

const router = express.Router();

router.get('/',getAllProducts);
router.post('/addproduct',addProduct);
router.delete('/removeproduct',removeProduct);
router.get('/',(req,res)=>{
    res.status(200).json({message:"endpoint is working"})
})
// router.post('/add', (req,res) => {
//     try{
//         const {} = req.body;

//     }catch(err){
//         console.log(err);
//     }
// })

module.exports = router;

