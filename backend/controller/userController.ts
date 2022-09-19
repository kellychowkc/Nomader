import { UserService } from "../service/userService";
import type { Request, Response } from "express";
import { logger } from "../utils/logger";
import { checkPassword } from "../utils/hash";
import jwtSimple from "jwt-simple";
import jwt from "../utils/jwt";
import { Interest, User } from "../utils/models";

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
            console.log(user);
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

                    //// Add interest in jwt!!!!!
                    //jwt
                    const payload = {
                        id: user.id,
                        username: user.username,
                    };
                    const token = jwtSimple.encode(payload, jwt.jwtSecret);

                    res.status(200).json({
                        success: true,
                        message: "success",
                        token: token,
                        username: user.username,
                    });
                }
            } else {
                res.status(401).json({
                    success: false,
                    message: "No such user or wrong password",
                });
                return;
            }
        } catch (err) {
            logger.error(err.toString());
            res.status(500).json({
                success: false,
                message: "Internal server error",
            });
        }
    };

    signUp = async (req: Request, res: Response) => {
        try {
            let userData = req.form?.fields;
            const file = req.form?.files.profile;
            const profile = file?.["newFilename"];
            userData!.profile = profile;
            console.log("controller", typeof userData);

            //not yet finished
            const newUser = await this.userService.create(
                userData as any as User
            );
            if (newUser) {
                res.status(201).json({ success: true, message: "Created" });
            } else {
                res.status(405).json({
                    success: false,
                    message: "Username is already used.",
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

    getSelfInfo = async (req: Request, res: Response) => {
        try {
            const user = req.user!;
            res.json(user);
        } catch (err) {
            logger.error(err.toString());
            res.status(500).json({
                success: false,
                message: "internal server error",
            });
        }
    };

    //!!!!Service is not finished
    addInterest = async (req: Request, res: Response) => {
        try {
            // await this.userService.addInterest(req.body);
            res.status(201).json({
                success: true,
                message: "Updated Interest List",
            });
        } catch (err) {
            logger.error(err.toString());
            res.status(500).json({
                success: false,
                message: "internal server error",
            });
        }
    };
}

declare global {
    namespace Express {
        interface Request {
            user?: Omit<User, "password">;
            interest?: Array<Interest>;
        }
    }
}
