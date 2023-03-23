const {Schema, model} = require("mongoose");
const CategorySchema = new Schema(
    {
        name:{
            type: String,
        },
        news:{
            type:Array,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const categoryModel = model("Category", CategorySchema)

module.exports = {categoryModel};