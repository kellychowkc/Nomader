import { Knex } from "knex";
import { Chance } from "chance";
const chance = new Chance();

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("countries").del();
    await knex("cities").del();
    await knex("attractions").del();

    const countryId: Array<{ id: number }> = await knex("countries")
        .insert([
            { name: "hiking", emergency_tel: "hiking.png" },
            { name: "hiking", emergency_tel: "hiking.png" },
            { name: "hiking", emergency_tel: "hiking.png" },
            { name: "hiking", emergency_tel: "hiking.png" },
            { name: "hiking", emergency_tel: "hiking.png" },
            { name: "hiking", emergency_tel: "hiking.png" },
            { name: "hiking", emergency_tel: "hiking.png" },
            { name: "hiking", emergency_tel: "hiking.png" },
            { name: "hiking", emergency_tel: "hiking.png" },
            { name: "hiking", emergency_tel: "hiking.png" },
        ])
        .returning("name");

    const cityId: Array<{ id: number; name: string }> = await knex("cities")
        .insert([
            { name: "hiking", description: "good" },
            { name: "hiking", description: "good" },
            { name: "hiking", description: "good" },
            { name: "hiking", description: "good" },
            { name: "hiking", description: "good" },
            { name: "hiking", description: "good" },
            { name: "hiking", description: "good" },
            { name: "hiking", description: "good" },
            { name: "hiking", description: "good" },
            { name: "hiking", description: "good" },
        ])
        .returning("id");

    const attractionId: Array<{ id: number }> = await knex("attractions")
        .insert([
            { name: "hiking" },
            { name: "hiking" },
            { name: "hiking" },
            { name: "hiking" },
            { name: "hiking" },
            { name: "hiking" },
            { name: "hiking" },
            { name: "hiking" },
            { name: "hiking" },
            { name: "hiking" },
        ])
        .returning("id");

    console.log(countryId, attractionId, cityId, "break");

    const cities_Id: Array<{ id: number; name: string }> = await knex(
        "cities"
    ).select("id", "name");
    const country_Id: Array<{ id: number }> = await knex("countries").select(
        "id"
    );
    const attraction_Id: Array<{ id: number }> = await knex(
        "attractions"
    ).select("id");

    console.log(
        attraction_Id[chance.integer({ min: 0, max: attractionId.length - 1 })][
            "id"
        ],
        country_Id[chance.integer({ min: 0, max: attractionId.length - 1 })][
            "id"
        ],
        cities_Id[chance.integer({ min: 0, max: attractionId.length - 1 })][
            "id"
        ]
    );
}
