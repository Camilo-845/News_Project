import { Schema, model } from "mongoose";
const FavoriteSchema = new Schema(
    {
        new:{
            type: String,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const favoriteModel = model("favorite", FavoriteSchema)
module.exports = {favoriteModel};