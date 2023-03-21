import { Schema, model } from "mongoose";
const FavoriteSchema = new Schema(
    {
        
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = {FavoriteSchema};