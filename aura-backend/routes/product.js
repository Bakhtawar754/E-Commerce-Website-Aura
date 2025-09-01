// routes/product.js
const express = require('express');
const router = express.Router();
const Product = require("../models/product");

// Add product
router.post('/add', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json({ message: 'Product saved', product: newProduct });
  } catch (err) {
    res.status(500).json({ message: 'Error saving product', error: err.message });
  }
});

// Get all products
router.get('/all', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching products', error: err.message });
  }
});

module.exports = router;
