import express from "express";
import { downloadimg, uploadImage } from "../controller/imgcontroller.js";
import upload from "../util/upload.js";
const router=express.Router();
router.post("/upload",upload.single("file"),uploadImage)
router.get("/file/:fileId",downloadimg)
export default router
