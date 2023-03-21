import { Schema, model } from "mongoose";
const CategorySchema = new Schema(
    {
        
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = {CategorySchema};