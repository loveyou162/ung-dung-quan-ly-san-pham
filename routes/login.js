const express = require("express");
const loginController = require("../controllers/login");
const router = express.Router();

router.get("/login", loginController.getLogin);
router.post("/login", loginController.postLogin);
router.get("/register", loginController.getSignUp);
router.post("/register", loginController.postSignUp);
router.post("/logout", loginController.postLogout);
router.get("/user", loginController.getAllUser);
module.exports = router;
