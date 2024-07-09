const express = require("express");
const userControllers = require("./../controllers/userControllers");
const authController = require("./../controllers/authController");

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);

router.post("/forgotPassowrd", authController.forgotPassowrd);
router.patch("/resetPassowrd/:token", authController.resetPassowrd);
router.patch("/updateMyPassword", authController.protect,authController.updatePassword);

r
module.exports = router;
