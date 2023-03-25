const {userModel} = require("../models")
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

require("dotenv").config();
const {JWT_KEY} = process.env;

const userController = {
    signupUser: async(req , res , next)=>{
        try{
            const {username, mail, password} = req.body;
            if(!username || !mail || !password) return res.status(400).json({Error:"Missing parameters"})
            const encryptPassword = await userModel.encryptPassword(req.body.password)
            const user = await new userModel({
                username: username,
                mail: mail,
                password: encryptPassword,
                favorites:[],
            })
            user.save()
            .then(result =>{
                res.status(200).json({message: "Created user",result: result})
            })
        }catch(err){
            res.status(400).json({Error: new Error(err).message})
        }

    },
    loginUser: async(req , res , next)=>{
        try{
            const {mail, password} = req.body;
            const userData = await userModel.findOne({mail: mail});
            if(Object.keys(userData).length<=0) return res.status(400).json({message: "Failed Authentition", Error: new Error(err).message})
            const compare = userModel.comparePassword(userData.password,password)
            if(!compare) return res.status(400).json({message:"Failed Authentication", Error: new Error(err).message})
            
            const token = jwt.sign(
                {username:userData.username, mail: userData.mail, userId: userData._id},
                JWT_KEY,
                { expiresIn: '24h' }
            )
            res.status(200).json({token: token, expiresIn: 86400})
        }catch(err){
            res.status(400).json({message: "Authentication error", Error: new Error(err).message})
        }
    }
};

module.exports =  userController;