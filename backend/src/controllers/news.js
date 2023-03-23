const {newModel} = require("../models");
const moment = require("moment");
const axios = require("axios");

require("dotenv").config();
const {NEWS_API_KEY} = process.env;

const newController = {
    getNews:async (req, res)=>{
        try{
            const actual_time=  new Date();
            const URL = "https://api.currentsapi.services/v1/latest-news?"+`apiKey=${NEWS_API_KEY}`
            console.log(URL);
            const data = await axios(URL);
            const news = data.data.news.map((e)=>{
                let neew = {
                    id:e.id,
                    title: e.title,
                    description: e.description,
                    url: e.url,
                    author: e.author,
                    image:
                      e.image && e.image === "None"
                        ? "https://fotos.perfil.com/2021/10/07/trim/950/534/bitcoin-1241867.jpg"
                        : e.image,
                    language:e.language,
                    category:e.category,
                    published: e.published,
                  };
                return neew;
            })
            const createNews = {
                lastUpdate: actual_time,
                news: news,
            }
            const baseDate = await newModel.create(createNews);
            const dateAll = await newModel.find({});
            return res.json(dateAll);
        }catch(err){
            console.error(new Error(err).message);
            res.status(400).json({"Error": new Error(err).message})
        }
    },
    getNewByID:async (req, res)=>{

    },
    getNewsByCategory:async (req, res)=>{

    },
}

module.exports = newController;
