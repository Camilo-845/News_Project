const server = require("./app")
const {dbConn} = require("./db")

require("dotenv").config();
const {PORT} = process.env;

dbConn();
server.listen(PORT, () => {
    console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
});

