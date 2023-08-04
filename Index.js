require("dotenv").config();
require("./Config/MongoConfig");

const express = require("express");
const app = express();

app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/',require('./Routes'))

app.listen(process.env.PORT, () => {
  console.log("Starting Server on port " + process.env.PORT);
});
