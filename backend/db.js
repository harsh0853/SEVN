const mongoose = require("mongoose");
require("dotenv").config();

const mongoURI = process.env.mongoURI;

const mongoConnect = () => {
  mongoose.connect(mongoURI);
};

module.exports = mongoConnect;
