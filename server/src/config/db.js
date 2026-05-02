import mongoose from "mongoose";

const connectDB=async()=>{
    if (!process.env.MONGO_URI) {
        throw new Error("MONGO_URI is not set. Add it to server/.env before starting the server.");
    }

    try {
        await mongoose.connect(`${process.env.MONGO_URI}/productStore`);
        console.log("Database connected");
    } catch (error) {
       throw new Error(`Database connection failed: ${error.message}`);
    }
}

export default connectDB;
