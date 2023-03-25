const userController = require("../controllers/user")
const {Router} = require("express");

const router = Router();

router.post("/signup",userController.signupUser);
router.post("/login",userController.loginUser)

module.exports =  router;
