const express = require("express")
const router = express.Router()

// Controller
const ProductController = require("../Controllers/productsController");
const Product = new ProductController();

// Routes
router.get("/", Product.findAll);
router.get("/:id", Product.findById);
router.post("/", Product.add)
router.delete("/:id", Product.delete);
router.put("/:id", Product.update);

module.exports = router;
