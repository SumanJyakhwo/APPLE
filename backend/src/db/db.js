import mongoose from "mongoose";

export const connectDB = async ()=>{
  await mongoose.connect('mongodb+srv://jyxsuman:suman5656@cluster0.gahu0dw.mongodb.net/hotelSystem').then(()=>console.log("DB connected"))
}