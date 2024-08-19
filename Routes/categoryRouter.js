const express = require("express");
const router = express.Router();

// Controller
const CategoryController = require("../Controllers/categoryController");
const Category = new CategoryController();

// Routes para crud de categorias
router.get("/", Category.findAll);
router.get("/:id", Category.findById);
router.post("/register", Category.add);
router.delete("/:id", Category.delete);
router.put("/:id", Category.update);

module.exports = router;
