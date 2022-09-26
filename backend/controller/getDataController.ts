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
            const countryList = await this.getDataService.getCountryData();

            res.json(countryList);
        } catch (err) {
            logger.error(err.toString());
            res.status(500).json({
                success: false,
                message: "internal server error",
            });
        }
    };

    getPosts = async (req: Request, res: Response) => {
        try {
            const postList = await this.getDataService.getPostData();
            const latestPostList = postList.slice(
                Math.max(postList.length - 20, 0)
            );

            res.json(latestPostList);
        } catch (err) {
            logger.error(err.toString());
            res.status(500).json({
                success: false,
                message: "internal server error",
            });
        }
    };

    getHotPosts = async (req: Request, res: Response) => {
        try {
            const postList = await this.getDataService.getHotPostData();
            const hotPostList = postList.slice(
                Math.max(postList.length - 20, 0)
            );
            res.json(hotPostList);
        } catch (err) {
            logger.error(err.toString());
            res.status(500).json({
                success: false,
                message: "internal server error",
            });
        }
    };

    getAttractions = async (req: Request, res: Response) => {
        try {
            const attractionList =
                await this.getDataService.getAttractionData();

            res.json(attractionList);
        } catch (err) {
            logger.error(err.toString());
            res.status(500).json({
                success: false,
                message: "internal server error",
            });
        }
    };

    getCode = async (req: Request, res: Response) => {
        try {
            const codeList = await this.getDataService.getCurrencyCode();
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
