const newController = require("../controllers/news");
const {Router} = require("express");
const check_auth = require("./check-auth")

const router = Router();

router.get("/favorite",check_auth, newController.getFavoriteNews);
router.post("/favorite",check_auth, newController.postFavoriteNew);
router.get("/", newController.getNews);
router.get("/:id", newController.getNewByID);
router.get("/category/:name", newController.getNewsByCategory);

module.exports =  router;
