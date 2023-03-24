const {Schema, model} = require("mongoose");
const CategorySchema = new Schema(
    {
        name:{
            type: String,
            unique: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const categoryModel = model("Category", CategorySchema)

module.exports = {categoryModel};