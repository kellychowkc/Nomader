import express from "express";
import { userController } from "../server";
import { isLoggedIn } from "../middleware/isLoggedInGuard";
import { signUpMiddleware } from "../middleware/signUpMiddleware";
import { postMiddleware } from "../middleware/postMiddleware";
import { asyncWrapper } from "../utils/wrapper";

export const logInRoutes = express.Router();

logInRoutes.post("/login", asyncWrapper(userController.logIn));
logInRoutes.post("/sign_up", signUpMiddleware, userController.signUp);
logInRoutes.post("/get_interest", userController.getUserInterest);
logInRoutes.post("/interest", userController.addInterest);
logInRoutes.post("/edit_interest", userController.editInterest);
logInRoutes.post("/post", postMiddleware, userController.newPost);
logInRoutes.post("/profile", userController.getPersonalInfo);
logInRoutes.post(
  "/update_profile",
  signUpMiddleware,
  userController.updateUserProfile
);
logInRoutes.post("/browse_post", userController.userBrowsePost);
logInRoutes.get("/", isLoggedIn, userController.getSelfInfo);
logInRoutes.get("/get_all_users", userController.getAllUsers);
logInRoutes.post("/get_user_profile", userController.getUserProfile);
logInRoutes.post("/get_user_friends", userController.getUserFriends);
logInRoutes.post(
  "/update_user_permission",
  userController.updateUserPermission
);
logInRoutes.post(
  "/get_user_friends_info",
  userController.getUserFriendsWithInfo
);
