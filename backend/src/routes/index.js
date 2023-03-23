const category  = require("./category");
const news  = require("./news");
const user  = require("./user");

const Router = require("express")

const routers = Router();

routers.use("/news", news)

module.exports = routers
