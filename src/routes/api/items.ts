import express from "express";
const router = express.Router();
import Item from "../../models/Item";

/*
* @desc Get API/items
* @
*/
router.get("/",(req,res)=>{
  Item.find().sort({date:-1}).then(items => {res.json(items)})
});
export default router;
