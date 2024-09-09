import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || ""

export const connectDB = async () => {
    try {

        console.log("mongo_uri: ", MONGO_URI);
        await mongoose.connect(MONGO_URI);
        console.log(`MongoDB Connected: ${MONGO_URI}`);
        
    } catch (error) {
        console.log("Error connection to MongoDB: ", MONGO_URI);
        process.exit(1);
    }
};