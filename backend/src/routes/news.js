const newController = require("../controllers/news");
const {Router} = require("express");

const router = Router();

router.get("/", newController.getNews);
router.get("/:id", newController.getNewByID);
router.get("/category/:name", newController.getNewsByCategory);

module.exports =  router;
