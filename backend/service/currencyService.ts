import { Knex } from "knex";

export class ChatRoomService {
    constructor(private knex: Knex) {}


    async getCurrencyCode() {
        let codeArr = [];
        const countries: Array<{ name: string }> = await this.knex("countries").select("name");
        for (let country of countries) {
            let name = country["name"];
            const codeData: Array<{ code: string, currency_name: string, using_country: string }> = await this.knex("currency_codes").select("*");
            for (let code of codeData) {
                if (code["using_country"].includes(name)) {
                    let codeOfCountry = {
                        country: name,
                        code: code["code"],
                        currency_name: code["currency_name"]
                    }
                    codeArr.push(codeOfCountry);
                }
            }
        }
        return codeArr;
    }

    async getCurrencyRates(code: string) {
        const thisYear = new Date(Date.now()).getFullYear();
        const thisMonth = new Date(Date.now()).getMonth() + 1;
        const thisDay = new Date(Date.now()).getDate();
        const codeId: Array<{ id: number }> = await this.knex("currency_codes")
            .select("id")
            .where("code", code);
        const currencyData: Array<{ code_base: string, rates: number, code_to: string }> = await this.knex("currency_rates")
            .select("currency_rates.rate", "currency_codes.*")
            .innerJoin("currency_codes", "currency_rates.code_to_id", "currency_codes.id")
            .where("currency_rates.year", thisYear)
            .andWhere("currency_rates.month", thisMonth)
            .andWhere("currency_rates.day", thisDay)
            .andWhere("currency_rates.code_base_id", codeId[0]["id"]);
        return currencyData;
    }
}