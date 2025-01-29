import express from "express";
import { getAllMessages, getsingledata, getsingledatadelete, sendMessage } from "../Controller/Message.controller.js";

const RouterMessage = express.Router();

RouterMessage.post("/sendmessage", sendMessage);
RouterMessage.get("/getalldmessage", getAllMessages);
RouterMessage.get("/singledata/:id",getsingledata)
RouterMessage.delete("/deletedata/:id",getsingledatadelete)

export default RouterMessage;
