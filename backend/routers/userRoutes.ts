import express from "express";
import { userController } from "../server";
import { isLoggedIn } from "../middleware/isLoggedInGuard";
import { formidableMiddleware } from "../middleware/formidableMiddleware";

export const logInRoutes = express.Router();

logInRoutes.post("/login", userController.logIn);
logInRoutes.post("/signUp", formidableMiddleware, userController.signUp);
logInRoutes.post("/interest", userController.addInterest);
logInRoutes.get("/", isLoggedIn, userController.getSelfInfo);
