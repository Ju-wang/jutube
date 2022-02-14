import express from "express";
import { watch, getEdit, postEdit, getUpload, postUpload } from "../controllers/videoControllers"

const videoRouter = express.Router()

videoRouter.get("/:id(\\d+)", watch)
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit)
// videoRouter.get("/:id(\\d+)/edit", getEdit)
// videoRouter.post("/:id(\\d+)/edit", postEdit)

videoRouter.get("/upload", getUpload)
videoRouter.post("/upload", postUpload)

export default videoRouter