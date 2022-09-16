import { Knex } from "knex";
import { hashPassword } from "../utils/hash";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users_interests").del();
    await knex("users").del();
    await knex("jobs").del();
    await knex("interests").del();

    // Inserts seed entries
    const interestId : Array<{ id : number }> = await knex("interests")
        .insert([
            { title: "hiking" },
            { title: "camping" },
            { title: "cycling" },
            { title: "foodie" },
            { title: "party" },
            { title: "photo shooting" },
            { title: "reading" },
            { title: "singing" },
            { title: "busking" },
            { title: "diving" },
            { title: "watch concert" },
            { title: "watch match" },
            { title: "join event" },
            { title: "skiing" },
            { title: "shopping" }
        ])
        .returning("id");

    const jobId : Array<{ id : number }> = await knex("jobs")
        .insert([
            { title : "student" },
            { title : "slash" },
            { title : "designer" },
            { title : "programmer" },
            { title : "entrepreneur" },
            { title : "YouTuber" },
            { title : "other" }
        ])
        .returning("id");


    const userId : Array<{ id : number }> = await knex("users")
        .insert([
            {
                username: "kc",
                password: (await hashPassword("1234")).toString(),
                first_name: "kc",
                last_name: "kc",
                birthday: "1234",
                gender: "Female",
                information: "hi",
                profile: "",
                email: "kc@kc",
                phone_num: "1234",
                job_id : jobId[1].id,
                isAdmin : true,

            },
            {
                username: "danny",
                password: (await hashPassword("1234")).toString(),
                first_name: "danny",
                last_name: "danny",
                birthday: "1234",
                gender: "Male",
                information: "hi",
                profile: "",
                email: "danny@danny",
                phone_num: "1234",
                job_id : jobId[1].id,
                isAdmin : false
            },
        ])
        .returning("id");

        await knex("users_interests").insert([
            { user_id : userId[0].id , interest_id : interestId[3].id },
            { user_id : userId[0].id , interest_id : interestId[6].id },
            { user_id : userId[1].id , interest_id : interestId[9].id },
            { user_id : userId[1].id , interest_id : interestId[12].id }
        ]);
}
