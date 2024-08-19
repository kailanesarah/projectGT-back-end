const express = require("express");
const router = express.Router();

//Rotas princiais
//url: localhost http://localhost:3000/endpoints

router.use("/users", require("./usersRoutes"));
router.use("/product", require("./productsRouter"));
router.use("/category", require("./categoryRouter"));
router.use("/order", require("./orderRouter"));

// teste router
router.get("/", (req, res) => {
  res.send("API Working");
});

module.exports = router;
