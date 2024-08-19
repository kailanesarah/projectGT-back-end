const express = require("express");
const router = express.Router();

// Controller
const OrderController = require("../Controllers/orderController");
const order = new OrderController();

// Routes para crud de pedidos
router.get("/", order.findAll);
router.get("/:id", order.findById);
router.post("/register", order.add);
router.delete("/:id", order.delete);
router.put("/:id", order.update);

module.exports = router;
