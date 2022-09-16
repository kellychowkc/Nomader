import { GetDataService } from "../service/getDataService";
import type { Request, Response } from "express";
import { logger } from "../utils/logger";

export class GetDataController {
    constructor(getDataService: GetDataService) {}

    getInterests = async (req: Request, res: Response) => {
        try {
            const interestList = [
                { id: 1, title: "Hiking" },
                { id: 2, title: "Camping" },
                { id: 3, title: "Cycling" },
                { id: 4, title: "Foodie" },
                { id: 5, title: "Party" },
                { id: 6, title: "Photo Shooting" },
                { id: 7, title: "Reading" },
                { id: 8, title: "Hiking" },
                { id: 9, title: "Singing" },
                { id: 10, title: "Busking" },
                { id: 11, title: "Diving" },
                { id: 12, title: "Watch Concert" },
                { id: 13, title: "Watch Match" },
                { id: 14, title: "Join Event" },
                { id: 15, title: "Shopping" },
            ];
            res.json(interestList);
        } catch (err) {
            logger.error(err.toString());
            res.status(500).json({
                success: false,
                message: "internal server error",
            });
        }
    };

    getCountries = async (req: Request, res: Response) => {
        try {
            const interestList = [
                { id: 1, name: "US" },
                { id: 2, name: "US" },
                { id: 3, name: "US" },
                { id: 4, name: "US" },
                { id: 5, name: "US" },
                { id: 6, name: "US" },
                { id: 7, name: "US" },
                { id: 8, name: "US" },
                { id: 9, name: "US" },
            ];
            res.json(interestList);
        } catch (err) {
            logger.error(err.toString());
            res.status(500).json({
                success: false,
                message: "internal server error",
            });
        }
    };
}
