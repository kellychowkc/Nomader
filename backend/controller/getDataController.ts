import { GetDataService } from "../service/getDataService";
import type { Request, Response } from "express";
import { logger } from "../utils/logger";

export class GetDataController {
    constructor(getDataService: GetDataService) {}

    getInterest = async (req: Request, res: Response) => {
        try {
            const interestList = [
                { id: 1, title: "Hiking" },
                { id: 2, title: "Hiking" },
                { id: 3, title: "Hiking" },
                { id: 4, title: "Hiking" },
                { id: 5, title: "Hiking" },
                { id: 6, title: "Hiking" },
                { id: 7, title: "Hiking" },
                { id: 8, title: "Hiking" },
                { id: 9, title: "Hiking" },
                { id: 10, title: "Hiking" },
                { id: 11, title: "Hiking" },
                { id: 12, title: "Hiking" },
                { id: 13, title: "Hiking" },
                { id: 14, title: "Hiking" },
                { id: 15, title: "Hiking" },
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
