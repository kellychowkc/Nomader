import { GetDataService } from "../service/getDataService";
import type { Request, Response } from "express";
import { logger } from "../utils/logger";

export class GetDataController {
    constructor(private getDataService: GetDataService) {}

    getInterests = async (req: Request, res: Response) => {
        try {
            const interestList = await this.getDataService.getInterestData();
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
            // const countryList = await this.getDataService.getCountryData();
            const countryList = [
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

            res.json(countryList);
        } catch (err) {
            logger.error(err.toString());
            res.status(500).json({
                success: false,
                message: "internal server error",
            });
        }
    };
}
