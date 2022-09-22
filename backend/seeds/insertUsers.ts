import { Knex } from "knex";
import { hashPassword } from "../utils/hash";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users_interests").del();
    await knex("users").del();
    await knex("jobs").del();
    await knex("interests").del();
    await knex("posts").del();

    // Inserts seed entries
    const interestId: Array<{ id: number }> = await knex("interests")
        .insert([
            { title: "hiking", image: "hiking.png" },
            { title: "camping", image: "camping.png" },
            { title: "cycling", image: "cycling.png" },
            { title: "foodie", image: "foodie.png" },
            { title: "party", image: "party.png" },
            { title: "photo shooting", image: "photoShooting.png" },
            { title: "reading", image: "reading.png" },
            { title: "singing", image: "singing" },
            { title: "busking", image: "busking.png" },
            { title: "diving", image: "diving.png" },
            { title: "watch concert", image: "watchConcert.png" },
            { title: "watch match", image: "watchMatch.png" },
            { title: "join event", image: "joinEvent.png" },
            { title: "skiing", image: "skiing.png" },
            { title: "shopping", image: "shopping.png" },
        ])
        .returning("id");

    const jobId: Array<{ id: number }> = await knex("jobs")
        .insert([
            { title: "student" },
            { title: "slash" },
            { title: "designer" },
            { title: "programmer" },
            { title: "entrepreneur" },
            { title: "YouTuber" },
            { title: "other" },
        ])
        .returning("id");

    const userId: Array<{ id: number }> = await knex("users")
        .insert([
            {
                username: "kc",
                password: (await hashPassword("1234")).toString(),
                first_name: "kc",
                last_name: "kc",
                birthday: "1234",
                gender: "Female",
                information: "hi",
                profile: "e7c26c4b30fae86f020b76a00.jpeg 16-57-51-116.jpeg",
                email: "kc@kc",
                phone_num: "1234",
                job_id: jobId[1].id,
                isAdmin: true,
            },
            {
                username: "danny",
                password: (await hashPassword("1234")).toString(),
                first_name: "danny",
                last_name: "danny",
                birthday: "1234",
                gender: "Male",
                information: "hi",
                profile: "e7c26c4b30fae86f020b76a00.jpeg 16-57-51-116.jpeg",
                email: "danny@danny",
                phone_num: "12345678",
                job_id: jobId[2].id,
                isAdmin: false,
            },
        ])
        .returning("id");

    await knex("users_interests").insert([
        { user_id: userId[0].id, interest_id: interestId[3].id },
        { user_id: userId[0].id, interest_id: interestId[6].id },
        { user_id: userId[1].id, interest_id: interestId[9].id },
        { user_id: userId[1].id, interest_id: interestId[12].id },
    ]);

    await knex("posts").insert([
        {
            user_id: userId[0].id,
            title: "Finding a decent place to work for your new business in Toronto.",
            content:
                "Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.",
            image: "4a1e563704ab7904f1d21d700.26.08 PM.png",
        },
        {
            user_id: userId[1].id,
            title: "Finding a decent place to work for your new business in Toronto.",
            content:
                "Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.",
            image: "4a1e563704ab7904f1d21d700.26.08 PM.png",
        },
        {
            user_id: userId[0].id,
            title: "Finding a decent place to work for your new business in Toronto.",
            content:
                "Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.",
            image: "4a1e563704ab7904f1d21d700.26.08 PM.png",
        },
        {
            user_id: userId[1].id,
            title: "Finding a decent place to work for your new business in Toronto.",
            content:
                "Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.",
            image: "4a1e563704ab7904f1d21d700.26.08 PM.png",
        },
    ]);
}
