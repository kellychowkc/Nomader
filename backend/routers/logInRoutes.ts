import express from "express";
import { userController } from "../server";
// import { isLoggedIn } from "../middleware/isLoggedInGuard";

export const logInRoutes = express.Router();

logInRoutes.post("/", userController.logIn);
