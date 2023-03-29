const {userModel} = require("../models")
const express = require('express');
const jwt = require('jsonwebtoken');

require("dotenv").config();
const {JWT_KEY} = process.env;

const userController = {

    signupUser: async(req , res , next)=>{
        try{
            const {username, mail, password} = req.body;
            if(!username || !mail || !password) return res.status(400).json({Error:"Missing parameters"})
            const DuplicateUserme = (await userModel.findOne({username: username}))!=null;
            if(DuplicateUserme) return res.status(400).json({message: "duplicated username"});
            const DuplicateMail =  (await userModel.findOne({mail: mail}))!=null;
            if(DuplicateMail) return res.status(400).json({message: "duplicated mail"});
            const encryptPassword = await userModel.encryptPassword(req.body.password);
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
            const userData = await userModel.findOne({mail: mail, isActive:true});
            if(Object.keys(userData).length<=0) return res.status(400).json({message: "Failed Authentition, user not found"})
            const compare = await userModel.comparePassword(userData.password,password);
            if(!compare) return res.status(400).json({message:"Failed Authentication, Invalid password"})            
            const token = jwt.sign(
                {username:userData.username, mail: userData.mail, userId: userData._id},
                JWT_KEY,
                { expiresIn: '24h' }
            )
            res.status(200).json({token: token, expiresIn: 86400})
        }catch(err){
            res.status(400).json({message: "Authentication error", Error: new Error(err).message})
        }
    },

    getDetail : async(req,res)=>{
        try{
            const {userId} = req.userData;
            const userData = await userModel.findOne({_id: userId});
            if(userData===null)return res.status(400).json({message: "Failed search user detail, user not found"});
            res.status(200).json({message:"sucessfull user detail search", result: userData})
        }catch(err){
            res.status(400).json({message: "Failed search user detail", Error: new Error(err).message})
        }
    },

    putPasswordUser: async(req,res)=>{
        try{
            const {userId} = req.userData;
            const {lastPassword, newPassword} = req.body;
            const userData = await userModel.findOne({_id: userId});
            if(userData==null) return res.status(400).json({message: "user not found"})
            if(!(await userModel.comparePassword(userData.password, lastPassword)))return res.status(400).json({message: "wrong password provided"});

            const encryptPassword = await userModel.encryptPassword(newPassword)
            await userModel.findByIdAndUpdate(userData._id,{$set: { password: encryptPassword }})
            const updatedUserData = await userModel.findOne({_id: userData._id})
            res.status(200).json({message: "user password updated", result: updatedUserData})
        }catch(err){
            res.status(400).json({message:"Failed password change", Error: new Error(err).message})
        }
    },
    
    deleteUser: async(req,res)=>{
        try{
            const {userId} = req.userData;
            await userModel.findByIdAndUpdate(userId, {isActive: false});
            res.status(200).json({message:"Succesful user delete"})
        }catch(err){
            res.status(400).json({message: "Failed delete user", Error: new Error(err).message})
        }
    }
};

module.exports =  userController;