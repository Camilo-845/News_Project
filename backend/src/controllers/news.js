const {newModel} = require("../models");
const moment = require("moment");
const axios = require("axios");

require("dotenv").config();
const {NEWS_API_KEY} = process.env;

const newController = {
    getNews:async (req, res)=>{
        try{
            var {page} = req.query;
            page = (page<=0)? 0 : page-1;
            const lastUpdate = await newModel.findOne().sort({ updatedAt: -1 }).limit(1);
            var minutesFromLastUpdate = parseInt(moment(lastUpdate.updatedAt).fromNow(true));
            minutesFromLastUpdate = (isNaN(minutesFromLastUpdate))? 0 : minutesFromLastUpdate;
            if(minutesFromLastUpdate>60){
                const URL = "https://api.currentsapi.services/v1/latest-news?"+`apiKey=${NEWS_API_KEY}`
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
                const newsPromise = news.map(el => newModel.create(el));
                await Promise.all(
                  newsPromise.map(promise =>
                    promise.catch(error => {
                      console.error('Error al crear la noticia');
                    })
                  )
                );            
            }
            const dateAll = await newModel.find({}).sort({updatedAt:-1}).skip(page*15).limit(15);
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
