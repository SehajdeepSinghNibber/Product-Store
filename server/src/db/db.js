import mongoose from "mongoose";
import config from "../config/config.js";

if (!config.MONGO_URI) {
    console.log("MONGO_URI not present");
    process.exit(1);
}

const connectDB= async ()=>{
    try {
        await mongoose.connect(`${config.MONGO_URI}/productStore`)
        console.log("MONGO_URI connected")
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
}

export default connectDB;