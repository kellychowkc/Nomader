import { Knex } from "knex";
import { hashPassword } from "../utils/hash";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    // Inserts seed entries
    await knex("users")
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
                job: "slash",
                country: "UK",
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
                phone_num: "12345678",
                job: "slash",
                country: "UK",
            },
        ])
        .returning("id");
}
