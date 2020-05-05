import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

import items from "./routes/api/items";

const db = require("./keys").mongoURI;
mongoose
    .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((r) => {
      console.log("Mongo Connected!");
    })
    .catch((err) => {
      console.error(err);
    });

app.get("/",(req,res)=>{res.json({k:"wow"})})
app.use("/api/items",items);
const port = process.env.PORT || 5000;
app.listen(port,()=>{console.log(`Server Started on port ${port}`)});
