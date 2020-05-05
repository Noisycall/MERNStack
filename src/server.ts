import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

const db = require("./keys").mongoURI;
mongoose
    .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((r) => {
      console.log("Mongo Connected!");
    })
    .catch((err) => {
      console.error(err);
    });

const port = process.env.PORT || 5000;
console.log(port);
