
require("dotenv").config();
const mongoose = require("mongoose");

const dbConn = async function() {

    const {DB_URI:connectionString} = process.env;

    // conexion a mongodb
    mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        //devuelve promesa
        .then(() => {
            console.log('Database connected to ATLAS')
        }).catch((err) => {
            console.error(new Error(err).message)
        })
};
module.exports = {dbConn}