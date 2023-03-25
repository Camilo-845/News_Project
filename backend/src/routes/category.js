const {categoryController} = require("../controllers");
const {Router} = require("express")

const router = Router();

router.get("/",categoryController.getCategories)

module.exports = router