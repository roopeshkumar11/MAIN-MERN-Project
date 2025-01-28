import cors from "cors";
import express from "express";
import RouterMessage from "./routes/Message.route.js";


const app = express();


app.use(cors());


app.use(express.json());



app.use("/api",RouterMessage)

export default app;
