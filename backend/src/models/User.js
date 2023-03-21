import { Schema, model } from "mongoose";
const UserSchema = new Schema(
    {
        
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = {UserSchema};