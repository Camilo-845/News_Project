const {Schema, model} = require("mongoose");
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