const Product = require('../model/productModel')

// @desc Get products
// @route GET api/products
// @access Private
const getProducts = async (req,res) => {
  const products = await Product.find()
  res.status(200).json(products)
};

// @desc Set products
// @route SET api/products
// @access Private
const setProducts = async (req,res) => {
  if(!req.body.text){
    res.status(400).json({message:"No text"})

  }
  const product = await Product.create({
    text:req.body.text
  })
  res.status(200).json(product)
}

// @desc Update products
// @route PUT api/products/:id
// @access Private
const updateProduct = async(req,res) =>{
  const product = await Product.findById(req.params.id)

  if(!product){
    res.status(400)
    // throw new Error('Product not found')
  }
  const updatedProduct = await Product.findByIdAndUpdate(req.params.is,req.body,{
    new:true,
  })

  res.status(200).json(updatedProduct)
}


// @desc Delete products
// @route DELETE api/products/:id
// @access Private
const deleteProduct = async (req,res)=> {
  const product = await Product.findById(req.params.id)

  if(!product){
    res.status(400).json({
      message:"Not found"
    })
  }
  await product.remove();
  res.status(200).json({ id: req.params.id });

}

module.exports = {getProducts, setProducts, updateProduct,  deleteProduct}