import dotnev from "dotenv";
dotnev.config();

import express from "express";
import http from "http";
import expressSession from "express-session";
import Knex from "knex";
import knexConfigs from "./knexfile";

//service and controller
import { UserService } from "./service/userService";
import { UserController } from "./controller/userController";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

import { logInRoutes } from "./routers/logInRoutes";

//route handling
app.use("/logIn", logInRoutes);

//404 Handler
app.use((req, res) => {
    res.redirect("/404.html");
});

const PORT = 8080;

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
});
