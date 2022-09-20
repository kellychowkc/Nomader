import dotnev from "dotenv";
dotnev.config();

import express from "express";
import cors from "cors";
import http from "http";
import expressSession from "express-session";
import Knex from "knex";
import knexConfigs from "./knexfile";

const app = express();
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

//accept other host
const allowList = ["http://localhost:3000"];
app.use(
    cors({
        origin: allowList.map((host) => host),
    })
);

//service and controller
import { UserService } from "./service/userService";
import { UserController } from "./controller/userController";
import { GetDataController } from "./controller/getDataController";
import { GetDataService } from "./service/getDataService";
import { MatchService } from "./service/matchService";
import { MatchController } from "./controller/matchController";

app.use(
    expressSession({
        secret: "Hi this is a secret",
        resave: true,
        saveUninitialized: true,
    })
);

//knex set up
const configMode = process.env.NODE_ENV || "development";
const knexConfig = knexConfigs[configMode];
const knex = Knex(knexConfig);

//server & controller set up
export const userService = new UserService(knex);
export const userController = new UserController(userService);
export const getDataService = new GetDataService(knex);
export const getDataController = new GetDataController(getDataService);
export const matchService = new MatchService(knex);
export const matchController = new MatchController(matchService);

import { logInRoutes } from "./routers/userRoutes";
import { dataRoutes } from "./routers/getDataRoutes";

//route handling
app.use("/user", logInRoutes);
app.use("/data", dataRoutes);

const PORT = 8080;

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
});
