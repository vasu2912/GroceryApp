const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");

//importing routes
const main = require("./routes/mainpage");
const cart = require("./routes/secondpage");

//Specifics
require("dotenv/config");
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes to handle the requests
app.use("/", main);

//DB Connection
const uri = process.env.DB_CONNECTION;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
  console.log("Connected to db")
);

module.exports = app;
