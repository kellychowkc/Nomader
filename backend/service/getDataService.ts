import { Knex } from "knex";
// import { Interest } from "../utils/models";

export class GetDataService {
    constructor(private knex: Knex) {}

    async getInterestData() {
        const interests = await this.knex.select("*").from("interests");

        return interests;
    }

    async getCountryData() {
        const countries = await this.knex.select("*").from("countries");

        return countries;
    }
}
