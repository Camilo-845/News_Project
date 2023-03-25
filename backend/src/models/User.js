const {Schema, model} = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new Schema(
    {
        username:{
            type:String,
            unique:true,
            required:true,
        },
        password:{
            type:String,
            required:true,
        },
        mail:{
            type:String,
            required:true,
            unique:true,
        },
        favorites:{
            type:Array,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

UserSchema.statics.encryptPassword = async (password) =>{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

UserSchema.statics.comparePassword = async (
    password,
    receivedPassword
  ) => {
    return await bcrypt.compare(password, receivedPassword);
  };

const userModel = model('user', UserSchema);

module.exports = {userModel};