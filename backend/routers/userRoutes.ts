import express from "express";
import { userController } from "../server";
import { isLoggedIn } from "../middleware/isLoggedInGuard";
import { signUpMiddleware } from "../middleware/signUpMiddleware";
import { postMiddleware } from "../middleware/postMiddleware";

export const logInRoutes = express.Router();

logInRoutes.post("/login", userController.logIn);
logInRoutes.post("/signUp", signUpMiddleware, userController.signUp);
logInRoutes.get("/getInterest", userController.getUserInterest);
logInRoutes.post("/interest", userController.addInterest);
logInRoutes.post("/post", postMiddleware, userController.newPost);
logInRoutes.get("/", isLoggedIn, userController.getSelfInfo);

logInRoutes.get("/getAllUser", isLoggedIn, userController.allUser)