import express from "express";
import cors from 'cors';
import bodyParse from 'body-parser';
import Router from "./router/userRouter.js";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const app=express();
app.use(cors());
app.use(bodyParse.json());

app.get('/',(req,res)=>{
    console.log("request -> ",req.url);
    res.send("Hello my server");

})

app.listen(process.env.PORT || 8080,()=>{
    console.log("Server running on 8080");
    mongoose.connect(process.env.MONGO_URL).then(()=>console.log("DB connected")).catch(err=>console.error("Error DB connection ",err));


})

app.use("/api",Router);