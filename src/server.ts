import express from "express";
import mongoose from "mongoose";
import cors from "cors"
const app = express();
app.use(cors());
app.use(express.json());

import items from "./routes/api/items";
import path from "path";

const db = require("./keys").mongoURI;
mongoose
    .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((r) => {
      console.log("Mongo Connected!");
    })
    .catch((err) => {
      console.error(err);
    });

app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use("/api/items",items);
const port = process.env.PORT || 5000;

app.get("*",(req,res)=>{
  res.sendFile(path.resolve(__dirname,'../client/build/index.html'))
})
app.listen(port,()=>{console.log(`Server Started on port ${port}`)});

