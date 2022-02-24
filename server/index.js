import express from "express";
import  Connection  from "./database/database.js";
import dotenv from 'dotenv';
import Routes from './routes/Route.js';
import cors from 'cors';
import bodyParser from "body-parser";


dotenv.config()
const app = express();
app.use(cors());
app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended : true}))
app.use('/',Routes);
const userName = process.env.MONGO_USERNAME
const password = process.env.MONGO_PASSWORD

Connection(userName,password)
app.listen(8000,()=>console.log('running.........'))