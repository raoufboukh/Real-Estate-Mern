import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routers/auth.routers.js";
import cookieParser from "cookie-parser";
import routerProperty from "./routers/property.routers.js";
dotenv.config();

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/", router);
app.use("/", routerProperty);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL).then(() => {
  console.log("Database connected successfully");
  app.listen(PORT, () => {
    console.log("Server is running on port 5000");
  });
});
