const express = require("express")
const router = express.Router()

router.use("/users", require("./usersRoutes"))
router.use("/product", require("./productsRouter"))

// teste router
router.get("/", (req, res) => {
   res.send("API Working")
})

module.exports = router