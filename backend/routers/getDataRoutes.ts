import express from "express";
import { getDataController } from "../server";

export const dataRoutes = express.Router();

dataRoutes.get("/interest", getDataController.getInterests);
dataRoutes.get("/country", getDataController.getCountries);
