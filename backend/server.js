require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

console.log("URI:", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const app = express();

app.listen(5000, () => {
  console.log("Server running on port 5000");
});