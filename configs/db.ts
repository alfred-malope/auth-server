import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI || ""

export const connectDB = async () => {
    try {

        console.log("mongo_uri: ", MONGO_URI);
        await mongoose.connect(MONGO_URI);
        console.log(`MongoDB Connected: ${MONGO_URI}`);
        
    } catch (error) {
        console.log("Error connection to MongoDB: ");
        process.exit(1);
    }
};