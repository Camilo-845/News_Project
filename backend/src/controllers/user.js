const {userModel} = require("../models")
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

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

    }
};

module.exports =  userController;