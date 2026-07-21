import mongoose from "mongoose";

 export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://arpita:9559836@cluster0.hctnahu.mongodb.net/food-del').then(()=>console.log("DB connected"));
}