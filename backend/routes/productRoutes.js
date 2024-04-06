const express = require("express")
const router = express.Router();

const {getProducts, setProducts,updateProduct,deleteProduct} = require('../controllers/productController')

router.get('/',getProducts)
router.post('/',setProducts)

router.put('/:id',updateProduct)
router.delete('/:id',deleteProduct)

module.exports = router;