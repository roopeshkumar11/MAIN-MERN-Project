import express from "express";
import { getAllMessages, sendMessage } from "../Controller/Message.controller.js";

const RouterMessage = express.Router();

RouterMessage.post("/sendmessage", sendMessage);
RouterMessage.get("/getalldmessage", getAllMessages);

export default RouterMessage;
