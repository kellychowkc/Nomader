import type { Request, Response } from "express";
import { logger } from "../utils/logger";
import { CurrencyService } from "../service/currencyService";

export class CurrencyController {
    constructor(private currencyService: CurrencyService) {}

    getCode = async (req: Request, res: Response) => {
        try {
            const codeList = await this.currencyService.getCurrencyCode();
            res.json(codeList);
        } catch (err) {
            logger.error(err.toString());
            res.status(500).json({
                success: false,
                message: "internal server error",
            });
        }
    };
}
