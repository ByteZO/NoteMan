import express from "express";
import authMiddleware from "../middlewares/authentication-middlewares.js";
import profile from "../controllers/profile-controller.js";
import createNote from "../controllers/createNote-controller.js";
import updateNote from "../controllers/updateNote-controller.js";
const Router = express.Router();

Router.get("/profile", authMiddleware, profile);
Router.post("/create-note", authMiddleware, createNote);
Router.post("/update-note", authMiddleware, updateNote);
export default Router;
