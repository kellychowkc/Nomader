import { MatchService } from "../service/matchService";
import { Request, Response } from "express";
import { logger } from "../utils/logger";
import jwtSimple from 'jwt-simple';
import jwt from '../utils/jwt';
import { Bearer } from 'permit';


export class MatchController {
    constructor(private matchService: MatchService) {}

    matchUser = async (req : Request, res : Response) => {
        try {
            const permit = new Bearer({
                query: "access_token"
            })
            const token = permit.check(req);
            const payload = jwtSimple.decode(token, jwt.jwtSecret);
            const userId = payload.id as number;

            const waitingList = []
            const waitingUserId = await this.matchService.getUserIdWhoWaitMatchYou(userId);
            if (waitingUserId.length > 0) {
                for (let waitingUser of waitingUserId) {
                    const alreadyMatched = await this.matchService.checkAlreadyMatchedUser(userId, waitingUser["id"]);
                    if (alreadyMatched == false) {
                        waitingList.push(waitingUser)
                    }
                }
            }

            const allUserId = await this.matchService.getAllUserId(userId);
            const wantMatchUserId = await this.matchService.geUserIdWhoYouWantToMatch(userId);
            let userIdList = allUserId.filter((id) => { return wantMatchUserId.indexOf(id) < 0; });


            let randomWaitingId = [0, 0];
            switch (waitingList.length) {
                case 0 :
                    break;
                case 1 :
                    randomWaitingId[0] = waitingList[0]["id"];
                    break;
                case 2 :
                    randomWaitingId[0] = waitingList[0]["id"];
                    randomWaitingId[1] = waitingList[1]["id"];
                    break;
                default :
                    while (randomWaitingId[0] == randomWaitingId[1]) {
                        randomWaitingId[0] = waitingList[Math.floor(Math.random() * waitingList.length)]["id"];
                        randomWaitingId[1] = waitingList[Math.floor(Math.random() * waitingList.length)]["id"];
                    }
                    break;
            }
            
            let randomId = [0, 0, 0];
            switch (userIdList.length) {
                case 0 :
                    break;
                case 1 :
                    randomId[0] = userIdList[0]["id"];
                    break;
                case 2 : 
                    randomId[0] = userIdList[0]["id"];
                    randomId[1] = userIdList[1]["id"];
                    break;
                case 3 :
                    randomId[0] = userIdList[0]["id"];
                    randomId[1] = userIdList[1]["id"];
                    randomId[2] = userIdList[2]["id"];
                    break;
                default :
                    while ((randomId[0] == randomId[1]) || (randomId[0] == randomId[2]) || (randomId[1] == randomId[2])) {
                        randomId[0] = userIdList[Math.floor(Math.random() * userIdList.length)]["id"];
                        randomId[1] = userIdList[Math.floor(Math.random() * userIdList.length)]["id"];
                        randomId[2] = userIdList[Math.floor(Math.random() * userIdList.length)]["id"];
                    }
                    break;
            }

            if (randomWaitingId[0] == 0 && randomId.length > 4) {
                do {
                    randomWaitingId[0] = userIdList[Math.floor(Math.random() * userIdList.length)]["id"];
                    randomWaitingId[1] = userIdList[Math.floor(Math.random() * userIdList.length)]["id"];
                }while ((randomId.filter(num => num === randomWaitingId[0])).length > 0 || (randomId.filter(num => num === randomWaitingId[1])).length > 0);
            } else if (randomWaitingId[1] == 0 && randomId.length > 3) {
                do {
                    randomWaitingId[1] = userIdList[Math.floor(Math.random() * userIdList.length)]["id"];
                } while ((randomId.filter(num => num === randomWaitingId[1])).length > 0);
            } 
            
            const idArr = randomWaitingId.concat(randomId);
            const matchIdArr = idArr.filter(id => id !== 0);
            const matchUserData = []
            for (let id of matchIdArr) {
                const userData = await this.matchService.getUserInfo(id);
                if (userData) {
                    const interestList = userData["interestIdList"];
                    let interestStr = "";
                    if (interestList.length > 0) {
                        for (let interest of interestList) {
                            interestStr += interest["title"];
                        }
                    }
                    const userInfo = userData["userData"][0];
                    const userPortfolio = {
                        id : id,
                        username : userInfo["username"],
                        jobTitle : userInfo["jobTitle"],
                        profile : userInfo["profile"],
                        interests : interestStr,
                        country : userInfo["country"]
                    };
                    matchUserData.push(userPortfolio);
                }
            }
            res.status(200).json({ success: true, message : matchUserData });
            return;
        } catch (err) {
            logger.error(err.toString());
            res.status(401).json({ message: 'match failed' })
            return;
        }
    }

    unlikeUser = async ( req : Request, res : Response ) => {
        try {
            
        } catch (err) {
            logger.error(err.toString());
            res.status(401).json({ message: 'match failed' })
            return;
        }
    }
}