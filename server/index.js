import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./database/dbconnect.js";
import userRouter from "./routes/userRoutes.js";

dotenv.config({});

// DATABASE CONNECTION
connectDB();

const app = express();
const PORT = process.env.PORT || 4000;
// default middleware

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// apis
app.use("/api/v1/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
