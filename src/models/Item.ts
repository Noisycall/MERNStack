import mongoose from "mongoose";
const Schema = mongoose.Schema;
interface ItemSchema extends mongoose.Document{
  id: string;
  name:string;
  date:Date;
}

const ItemSchema = new Schema({
  name:{type:String,required:true},
  date:{
    type: Date,
    default: Date.now()
  }
});


const Item  = mongoose.model<ItemSchema>('Item', ItemSchema);
export default Item;
