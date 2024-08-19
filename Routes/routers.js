const express = require("express")
const router = express.Router()

router.use("/users", require("./usersRoutes"))

// teste router
router.get("/", (req, res) => {
   res.send("API Working")
})

module.exports = router