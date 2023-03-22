import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new Schema(
    {
        username:{
            type:String,
            unique:true,
        },
        password:{
            type:String,
        },
        mail:{
            type:String,
            unique:true,
        },
        favorites:{
            type:String,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

UserSchema.statics.encryptPassword = async (password) =>{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

UserSchema.statics.comparePassword = async (
    password,
    receivedPassword
  ) => {
    return await bcrypt.compare(password, receivedPassword);
  };

const userModel = model('user', UserSchema);

module.exports = {userModel};