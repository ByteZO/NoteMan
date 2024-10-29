import express from "express";
import { register, logIn } from "../controllers/auth-controllers.js";
const Router = express.Router();

Router.post("/register", register);
Router.post("/logIn", logIn);

export default Router;
