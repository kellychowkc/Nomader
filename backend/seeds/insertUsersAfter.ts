import { Knex } from "knex";
// import { Chance } from "chance";
// const chance = new Chance();

export async function seed(knex: Knex): Promise<void> {
    // // Deletes ALL existing entries
    // await knex("users_like_attractions").del();
    // await knex("attractions_type").del();
    // // Inserts seed entries
    // const userId : Array<{ id: number }> = await knex("users").select("id");
    // const interestId : Array<{ id: number }> = await knex("interests").select("id");
    // for (let user of userId) {
    //     await knex("users")
    //         .where("id", user["id"])
    //         .update({
    //             country_id: chance.integer({ min: 0, max: 2195 })
    //         })
    // }
    // let randomAttractionsType = [];
    // for (let i = 0; i < 2195; i++) {
    //     let randomInterestNum = chance.integer({ min: 1, max: 3});
    //     for (let i = 0; i < randomInterestNum; i++) {
    //         let attractionTypeData = {
    //             attraction_id: i,
    //             interest_id: interestId[chance.integer({ min: 0, max: interestId.length - 1 })]["id"]
    //         };
    //         randomAttractionsType.push(attractionTypeData);
    //     }
    // }
    // await knex("attractions_type").insert(randomAttractionsType);
    // let randomLikeAttractions = [];
    // for (let i = 0; i < 2195; i++) {
    //     let readerNum = chance.integer({ min: 0, max: userId.length });
    //     for (let j = 0; j < readerNum; j++) {
    //         let reader = chance.integer({ min: 0, max: userId.length - 1 });
    //         let browseData = {
    //             user_id: userId[reader]["id"],
    //             browse_count: chance.integer({ min: 1, max: 100 }),
    //             attraction_id: i
    //         }
    //         randomLikeAttractions.push(browseData);
    //     }
    // }
    // await knex("users_like_attractions").insert(randomLikeAttractions);
}
