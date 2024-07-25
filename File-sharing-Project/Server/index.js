import express from "express";
import router from "./routes/routes.js";
import { Dbconnection } from "./database/db.js";
import cors from "cors"
const app=express()
app.use(cors())




app.use("/",router)

const PORT=8000;
Dbconnection()
app.listen(PORT,()=>{
    console.log(`Port runing server on ${PORT}`)
})