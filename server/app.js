//this is the main app.js file that uses express, cors, morgan, and mongoose
//routes are here as well as connection to the database
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");
const morgan = require("morgan");

//for .env file
require("dotenv/config");
const api = process.env.API_URL;

//middleware - express, morgan
app.use(express.json());
app.use(morgan("tiny"));

//TODO routes

//connect using connection string from .env file
mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "CST323DB",
  })
  .then(() => {
    console.log("Database connection is ready");
  })
  .catch((err) => {
    console.log(err);
  });

//api
app.get("/", (req, res) => {
  res.send("hello world");
});

//running on localhost port 3000
app.listen(3000, () => {
  console.log(api);
  console.log("server is running at http://localhost:3000");
});

/*app.listen(`${api}/instruments`, () => {
  console.log("server is running on localhost:3000");
}); */
