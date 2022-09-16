import express from "express";
import { userController } from "../server";
import { isLoggedIn } from "../middleware/isLoggedInGuard";

export const logInRoutes = express.Router();

logInRoutes.post("/login", userController.logIn);
logInRoutes.post("/signUp", userController.signUp);
logInRoutes.post("/interest", userController.addInterest);
logInRoutes.get("/", isLoggedIn, userController.getSelfInfo);
