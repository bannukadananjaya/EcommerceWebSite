const asyncHandler = require("express-async-handler");
const Product = require("../model/productModel");

// @desc Get products
// @route GET api/products
// @access Private
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
});

// @desc Set products
// @route SET api/products
// @access Private
const setProducts = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400).json({ message: "No text" });
  }
  let products = await Product.find({});
  let id;
  if (products.length > 0) {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1;
  } else {
    id = 1;
  }
  const product = await Product.create({
    id: id, // Example value for id
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
    comments: [
      // Example value for comments
      {
        body: req.body.comments,
        date: new Date(),
      },
    ],
    date: new Date(), // Example value for date
    hidden: false, // Example value for hidden
  });

  // try{
  //   const product = new Product({
  //     id:req.body.id,
  //     name:req.body.name,
  //     image:req.body.image,
  //     category:req.body.category,
  //     new_price:req.body.new_price,
  //     old_price:req.res.old_price,
  //   })
  //   console.log(product)
  //   await product.save()
  //   console.log("Saved")
  //   res.json({
  //     success:true,
  //     name:req.body.name,
  //   })
  // }catch(e){
  //   res.json("error happend",e)
  // }

  res.status(200).json(product);
});

// @desc Update products
// @route PUT api/products/:id
// @access Private
const updateProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(400);
    // throw new Error('Product not found')
  }
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.is,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedProduct);
};

// @desc Delete products
// @route DELETE api/products/:id
// @access Private
const deleteProduct = async (req, res) => {
  // const product = await Product.findById(req.params.id);

  await Product.findOneAndDelete({id:req.body.id})
  console.log("Removed")
  res.json({
    success:true,
    name:req.body.name
  })
  //  if (!product) {
  //   res.status(400).json({
  //     message: "Not found",
  //   });
  // }
  // await product.remove();
  // res.status(200).json({ id: req.params.name });
};

module.exports = { getProducts, setProducts, updateProduct, deleteProduct };
