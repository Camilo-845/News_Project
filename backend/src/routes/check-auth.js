const jwt = require('jsonwebtoken');
require("dotenv").config();
const {JWT_KEY} = process.env;

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, JWT_KEY);
    req.userData = { email: decodedToken.email, userId: decodedToken.userId };
    next();
  } catch (error) {
    res.status(401).json({
      message: 'Autenticación fallida'
    });
  }
};
