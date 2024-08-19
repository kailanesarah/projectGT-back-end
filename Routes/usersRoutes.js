const express = require("express")
const router = express.Router()

// Controller
const UsersController = require("../Controllers/userController");
const User = new UsersController();
const authGuard = require("../Middlewares/authGuard")

// Routes
router.post("/login", User.login)
router.post("/register", (User.add));

router.get("/", User.findAll);
router.get("/:id", User.findById);
router.delete("/:id", authGuard, User.delete);
router.put("/:id", authGuard, User.update);

module.exports = router;
