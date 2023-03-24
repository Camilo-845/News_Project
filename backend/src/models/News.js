const {Schema, model} = require("mongoose");
const NewSchema = new Schema(
    {   
            id:{
                type: String,
                unique: true,
            },
            title:{
                type:String,
            },
            description:{
                type:String,
            },
            url:{
                type:String,
            },
            author:{
                type:String,
            },
            image:{
                type:String,
                default:"https://cdn.pixabay.com/photo/2014/05/21/22/28/old-newspaper-350376_1280.jpg",
            },
            lenguage:{
                type:String,
            },
            category:{
                type:Array
            },
            published:{
                type:Date,
            },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const newModel = model("new", NewSchema);

module.exports = {newModel};