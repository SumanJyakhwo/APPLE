import mongoose from "mongoose";

export const connectDB = async ()=>{
  await mongoose.connect('mongodb+srv://sngrmbhandari:oB9XULKxZDf836Ca@cluster0.lvoozqy.mongodb.net/food-del').then(()=>console.log("DB connected"))
}