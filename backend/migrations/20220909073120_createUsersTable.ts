import { Knex } from "knex";
import { seed } from "../seeds/insertUsers";

export async function up(knex: Knex): Promise<void> {
    const hasTableUsers = await knex.schema.hasTable("users");
    if (!hasTableUsers) {
        await knex.schema.createTable("users", (table) => {
            table.increments();
            table.string("username").notNullable().unique();
            table.string("password").notNullable();
            table.string("first_name").notNullable();
            table.string("last_name").notNullable();
            table.integer("birthday");
            table.string("gender");
            table.string("information");
            table.string("profile");
            table.string("email").notNullable().unique();
            table.integer("phone_num").notNullable().unique();
            table.string("job");
            table.string("country");
            table.timestamps(true, true);
        });
        await seed(knex);
    } else {
        return Promise.resolve();
    }
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists("users");
}
