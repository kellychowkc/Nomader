import { Knex } from "knex";
// import { Interest } from "../utils/models";

export class GetDataService {
    constructor(private knex: Knex) {}

    async getInterestData() {
        const interest = await this.knex.select("*").from("interest");

        return interest;
    }
}
