const {categoryModel} = require("../models")

const categoryController = {
    getCategories:async (req , res)=>{
        try{
            const dbData = await categoryModel.find({})
            res.status(200).json(dbData)
        }catch(err){
            console.error(new Error(err).message);
            res.status(400).json({error: new Error(err).message})
        }
    }

}

module.exports = categoryController;