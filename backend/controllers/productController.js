import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

//@description: fetch all products
// @route : GET /api/products
// @access : Public Route
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

//@description: fetch single product
// @route : GET /api/products/:id
// @access : Public Route
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

//@description: delete product
// @route : DELETE /api/products/:id
// @access : Private Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();
    res.json({ message: "Product removed" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

//@description: create product
// @route : POST /api/products
// @access : Private Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: "Sample name",
    price: 0,
    user: req.user._id,
    image: "/images/simple.jpg",
    brand: "Samle brand",
    category: "Samle category",
    countInStock: 0,
    numReviews: 0,
    description: "Samle description",
  });
  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

//@description: update product
// @route : PUT /api/products/:id
// @access : Private Admin
const updateProduct = asyncHandler(async (req, res) => {
  const {name,price,description,image,brand, category, countInStock} = req.body
  const product = await Product.findById(req.params.id)
  
  if(product){
    product.name = name
    product.price = price
    product.description = description
    product.image = image
    product.brand = brand
    product.category = category
    product.countInStock = countInStock

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  }
    else {
      res.status(404)
      throw new Error('Product not found')

    }
});


export { getProducts, getProductById,createProduct,updateProduct, deleteProduct };
