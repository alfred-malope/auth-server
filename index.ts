import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./configs/db";
import authRoutes from "./routes/auth";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
    origin: process.env.CLIENT_URL, 
    credentials: true 
};

app.use(cors(corsOptions));

app.use(express.json()); 
app.use(cookieParser()); 

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
	connectDB();
	console.log(`Server is running on http://localhost:${PORT}`, );
});
