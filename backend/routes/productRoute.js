const express = require('express');
// import {addProduct} from '../controller/productController'

const router = express.Router();

// router.post('/add',addProduct);
router.post('/add', (req,res) => {
    try{
        const {} = req.body;

    }catch(err){
        console.log(err);
    }
})

export default router;

