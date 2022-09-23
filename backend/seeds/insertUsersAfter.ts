import { Knex } from "knex";
// import { Chance } from "chance";
// const chance = new Chance();

export async function seed(knex: Knex): Promise<void> {
    // // Deletes ALL existing entries
    // await knex("users_like_attractions").del();
    // await knex("attractions_type").del();

    // // Inserts seed entries
    // const userId: Array<{ id: number }> = await knex("users").select("id");
    // const interestId: Array<{ id: number }> = await knex("interests").select("id");
    // const postId: Array<{ id: number }> = await knex("post").select("id");
    // const citiesId: Array<{ id: number, name: string }> = await knex("cities").select("id", "name");
    // const countryId: Array<{ id: number }> = await knex("countries").select("id");
    // const attractionId: Array<{ id: number }> = await knex("attractions").select("id");
    // for (let user of userId) {
    //     await knex("users")
    //         .where("id", user["id"])
    //         .update({
    //             country_id: countryId[chance.integer({ min: 0, max: countryId.length - 1 })]["id"]
    //         })
    // }
    
    
    // for (let post of postId) {
    //     let city = citiesId[chance.integer({ min: 0, max: citiesId.length - 1 })];
    //     let attractionId: Array<{ id: number }> = await knex("attractions").select("id").whereLike("city_list", `%${city["name"]}%`);
    //     await knex("posts")
    //         .where("id", post["id"])
    //         .update({
    //             attraction_id: attractionId[chance.integer({ min: 0, max: attractionId.length - 1 })]["id"],
    //             city_id: city["id"]
    //         })
    // }


    // for (let i = 0; i < attractionId.length - 1; i++) {
    //     let randomInterestNum = chance.integer({ min: 1, max: 3});
    //     for (let i = 0; i < randomInterestNum; i++) {
    //         let attractionTypeData = {
    //             attraction_id: attractionId[i]["id"],
    //             interest_id: interestId[chance.integer({ min: 0, max: interestId.length - 1 })]["id"]
    //         };
    //         await knex("attractions_type").insert(attractionTypeData);
    //     }
    // }


    // for (let i = 0; i < attractionId.length - 1; i++) {
    //     let readerNum = chance.integer({ min: 0, max: userId.length - 1 });
    //     for (let j = 0; j < readerNum; j++) {
    //         let reader = chance.integer({ min: 0, max: userId.length - 1 });
    //         let browseData = {
    //             user_id: userId[reader]["id"],
    //             browse_count: chance.integer({ min: 1, max: 100 }),
    //             attraction_id: attractionId[i]["id"]
    //         }
    //         await knex("users_like_attractions").insert(browseData);
    //     }
    // }

};

