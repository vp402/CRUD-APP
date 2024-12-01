const express = require("express");
const {
  getProducts,
  createProduct,
} = require("../controllers/productController");

const router = express.Router();

// Get all products
router.get("/", getProducts);

// Add a new product
router.post("/", createProduct);

module.exports = router;