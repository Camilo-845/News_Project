import { Schema, model } from "mongoose";
const NewSchema = new Schema(
    {
        
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = {NewSchema};