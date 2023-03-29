const {newModel,categoryModel, userModel} = require("../models");
const moment = require("moment");
const axios = require("axios");

require("dotenv").config();
const {NEWS_API_KEY} = process.env;

const newController = {
    getNews:async (req, res)=>{
        try{
            var {page} = req.query;
            if(!page) page=0;
            page = (page<=0)? 0 : page-1;
            const lastUpdate = await newModel.findOne().sort({ updatedAt: -1 }).limit(1);
            var minutesFromLastUpdate = parseInt(moment(lastUpdate.updatedAt).fromNow(true));
            minutesFromLastUpdate = (isNaN(minutesFromLastUpdate))? 0 : minutesFromLastUpdate;
            if(minutesFromLastUpdate>60){
              var categories = [];
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
                    e.category.forEach(el=>{categories.push(el)})
                    return neew;
                })
                const newsPromise = news.map(el => newModel.create(el).catch(err=>console.log("error al craer noticia")));
                const categoriesPromise = categories.map(el=>categoryModel.create({name:el}).catch(err=>console.log("error al crear categorio")))
                await Promise.all(newsPromise);            
                await Promise.all(categoriesPromise);            
            }
            const dateAll = await newModel.find({}).sort({updatedAt:-1}).skip(page*15).limit(15);
            const categories1 = await categoryModel.find({});
            return res.json(dateAll);
        }catch(err){
            console.error(new Error(err).message);
            res.status(400).json({"Error": new Error(err).message})
        }
    },

    getNewByID:async (req, res)=>{
      try{
        const {id} = req.params;
        if(!id)res.staus(400).json({err:"No ID provided"})
        const dbData = await newModel.findOne({id:id})
        res.status(200).json(dbData);
      }catch(err){
        console.error(new Error(err).message);
        res.status(400).json({Error: new Error(err).message})
      }
    },

    getNewsByCategory:async (req, res)=>{
      try{
        const {name} = req.params;
        var {page} = req.query;
        if(!name) res.status(400).json({error: "No name provided"});
        if(!page) page=0;
        page = (page<=0)? 0 : page-1;
        const dbData = await newModel.find({category:{$in:[name]}}).sort({updatedAt:-1}).skip(page*10).limit(10);
        res.status(200).json(dbData);
      }catch(err){
        console.error(new Error(err).message)
        res.status(200).json({error:new Error(err).message})
      }
    },

    postFavoriteNew: async(req,res)=>{
      try{
        const {userId} = req.userData;
        const {newId} = req.query;
        if(!newId)return res.status(400).json({message: "Failed favorrite new change, newId param is not provided"})
        const userData = await userModel.findById(userId);
        const newData = await newModel.findOne({id:newId});
        if(Object.keys(userData).length<=0)return res.status(400).json({message: "Failed favorite new change, user not found"});
        if(Object.keys(newData).length<=0)return res.status(400).json({message: "Failed favorite new change, new not found"});
        if(!userData.favorites){
          await userModel.findByIdAndUpdate(userId,{favorites:[newId]},{upsert: true})
        }else{
          if(userData.favorites.includes(newId)){
            var favorites = userData.favorites.filter(el=>el!==newId)
            await userModel.findByIdAndUpdate(userId,{favorites:favorites})
          }else{
            var favorites = [...userData.favorites, newId]
            await userModel.findByIdAndUpdate(userId,{favorites:favorites})
          }
        }
        res.status(200).json({message:"Favorite new changed"})
      }catch(err){
        res.status(400).json({message: "Failed favorite new change", Error: new Error(err).message})
      }
    },

    getFavoriteNews: async(req,res) =>{
      try{
        const {userId} = req.userData;
        userData = await userModel.findById(userId);
        if(Object.keys(userData).length<=0)return res.status(400).json({message: "Failed favorites news detail, user not found"});
        var newsResult = []
        const news = userData.favorites.map(el=>{
          return newModel.findOne({id:el})
          .then(neew =>{
            newsResult.push(neew)
          })
          .catch(err=>console.log("Error al buscar la noticia"))
        })
        await Promise.all(news)
        res.status(200).json({message:"Successful favorites detail", result: newsResult})
      }catch(err){
        res.status(400).json({message:"Failed favorites news detail", Error: new Error(err).message})
      }
    },

    postComentary: async (req,res)=>{
      try{
        const {userId} = req.userData;
        const {newId, comment} = req.body;
        if(!newId || !comment) return res.status(400).json({message: "Failed post new comment, params not provided"});

        const userData = await userModel.findOne({_id: userId});
        if(userData===null) return res.status(400).json({message: "Failed post new comment, User not found"});
        
        const newData = await newModel.findOne({id: newId});
        if(newData===null) return res.status(400).json({message: "Failed post new comment, New data not found"});
        if(newData.comments){
          const comments = [...newData.comments,{user: userData.username, comment:comment}];
          await newModel.findOneAndUpdate({id:newId},{comments:comments})
        }else{
          await newModel.findOneAndUpdate({id:newId},{comments:[{user:userData.username,comment:comment}]},{upsert: true})
        }
        const newData2 = await newModel.findOne({id: newId});
        res.status(200).json({message:"successfull post comment"})
      }catch(err){
        res.status(400).json({message: "Failed post new comment", Error: new Error(err).message})
      }
    },
}

module.exports = newController;
