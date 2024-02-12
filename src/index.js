import express from "express";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();



connectDB();


app.listen(process.env.PORT, ()=>{
    console.log(`App is listening on port ${process.env.PORT}`)
})
