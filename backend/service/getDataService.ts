import { Knex } from "knex";
// import { Interest } from "../utils/models";

export class GetDataService {
    constructor(private knex: Knex) {}

    async getInterestData() {
        const interests = await this.knex.select("*").from("interests");

        return interests;
    }

    async getCountryData() {
        const countries : Array<{ id : number, name: string }> = await this.knex.select("id", "name").from("countries");

        return countries;
    }
}
