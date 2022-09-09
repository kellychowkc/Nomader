import { UserService } from "../service/userService";
import type { Request, Response } from "express";
import { logger } from "../utils/logger";
import { checkPassword } from "../utils/hash";
import jwtSimple from "jwt-simple";
import jwt from "../utils/jwt";

export class UserController {
    constructor(private userService: UserService) {}

    logIn = async (req: Request, res: Response) => {
        try {
            const { username, password } = req.body;
            console.log(req.body);
            if (!username || !password) {
                res.status(400).json({
                    success: false,
                    message: "invalid username/password",
                });
                return;
            }

            const user = await this.userService.getUserByUserName(username);
            if (!user) {
                res.status(401).json({
                    success: false,
                    message: "No such user or wrong password",
                });
                return;
            }
            const match = await checkPassword(password, user["password"]);
            if (match) {
                if (req.session) {
                    req.session["user"] = {
                        id: user["id"],
                        username: user["username"],
                    };
                    const payload = {
                        id: user.id,
                        username: user.username,
                    };
                    const token = jwtSimple.encode(payload, jwt.jwtSecret);

                    res.status(200).json({
                        success: true,
                        message: "success",
                        token: token,
                    });
                }
            } else {
                return;
            }

            //jwt
        } catch (err) {
            logger.error(err.toString());
            res.status(500).json({
                success: false,
                message: "Internal server error",
            });
        }
    };

    create = async (req: Request, res: Response) => {
        try {
            const newUser = await this.userService.create(req.body);
            if (newUser) {
                res.status(201).json({ success: true, message: "Created" });
            } else {
                res.status(405).json({
                    success: false,
                    message: "Username/email/phone number is already used.",
                });
            }
        } catch (err) {
            logger.error(err.toString());
            res.status(500).json({
                success: false,
                message: "internal server error",
            });
        }
    };
}
