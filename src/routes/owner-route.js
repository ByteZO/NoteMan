import express from "express";
import authMiddleware from "../middlewares/authentication-middlewares.js";
import profile from "../controllers/profile-controller.js";
import createNote from "../controllers/createNote-controller.js";
const Router = express.Router();

Router.get("/profile", authMiddleware, profile);
Router.post("/create-note", authMiddleware, createNote);
export default Router;
