import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv"
import studentRoute from './Routes/studentRoutes.js'
import loginRoute from "./Routes/loginRoute.js"


const app=express();

app.use(bodyParser.json({limit:"30MB",extend:true}));
app.use(bodyParser.urlencoded({limit:"30MB",extend:true}));
dotenv.config();

mongoose.connect('mongodb://localhost:27017/TestApp',{
    useNewUrlParser:true,
})
.then(()=>
    app.listen(5000,()=>
    console.log("connected to PORT 5000")
)
)
.catch((error)=>console.log(error))

app.use('/student',studentRoute)
app.use('/auth',loginRoute)


