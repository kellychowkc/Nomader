import express from "express";
import { matchController } from "../server";

export const matchRoutes = express.Router();

matchRoutes.post("/match", matchController.matchUser)
matchRoutes.post("/unlike", matchController.unlikeUser)