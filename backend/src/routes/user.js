const userController = require("../controllers/user")
const {Router} = require("express");
const check_auth = require("./check-auth")

const router = Router();

router.post("/signup",userController.signupUser);
router.post("/login",userController.loginUser);
router.get("/detail",check_auth,userController.getDetail)
router.put("/update/password",check_auth, userController.putPasswordUser)
router.delete("/delete", check_auth, userController.deleteUser)

module.exports =  router;
