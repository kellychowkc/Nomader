import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    const hasCountries = await knex.schema.hasTable("countries");
    if (!hasCountries) {
        await knex.schema.createTable("countries", (table) => {
            table.increments();
            table.string("name").notNullable();
            table.string("tel_code");
            table.string("location");
            table.string("emergency_tel");
            table.string("police_tel");
            table.string("fire_tel");
            table.string("ambulance_tel");
            table.string("info");
        })
    }

    const hasCurrencyCodes = await knex.schema.hasTable("currency_codes");
    if (!hasCurrencyCodes) {
        await knex.schema.createTable("currency_codes", (table) => {
            table.increments();
            table.string("code").notNullable();
            table.string("currency_name").notNullable();
            table.integer("country_id").unsigned();
            table.foreign("country_id").references("countries.id");
        })
    }

    const hasCurrencyRates = await knex.schema.hasTable("currency_rates");
    if (!hasCurrencyRates) {
        await knex.schema.createTable("currency_rates", (table) => {
            table.increments();
            table.integer("code_base_id").unsigned();
            table.foreign("code_base_id").references("currency_codes.id");
            table.integer("rate");
            table.integer("code_to_id").unsigned();
            table.foreign("code_to_id").references("currency_codes.id");
            table.integer("year");
            table.integer("month");
            table.integer("day");
        })
    }

    const hasCities = await knex.schema.hasTable("cities");
    if (!hasCities) {
        await knex.schema.createTable("cities", (table) => {
            table.increments();
            table.string("name").notNullable();
            table.string("description");
            table.string("image");
            table.string("city_list");
        })
    }

    const hasAttractions = await knex.schema.hasTable("attractions");
    if (!hasAttractions) {
        await knex.schema.createTable("attractions", (table) => {
            table.increments();
            table.string("name").notNullable();
            table.string("description");
            table.string("image");
            table.string("location");
            table.string("open_time");
            table.string("class");
            table.string("city_list");
        })
    }

    const hasInterests = await knex.schema.hasTable("interests");
    if (!hasInterests) {
        await knex.schema.createTable("interests", (table) => {
            table.increments();
            table.string("title").notNullable();
            table.string("image");
        })
    }

    const hasAttractionsType = await knex.schema.hasTable("attractions_type");
    if (!hasAttractionsType) {
        await knex.schema.createTable("attractions_type", (table) => {
            table.increments();
            table.integer("attraction_id").unsigned();
            table.foreign("attraction_id").references("attractions.id");
            table.integer("interest_id").unsigned();
            table.foreign("interest_id").references("interests.id");
        })
    }

    const hasPosts = await knex.schema.hasTable("posts");
    if (!hasPosts) {
        await knex.schema.createTable("posts", (table) => {
            table.increments();
            table.string("title").notNullable();
            table.integer("attraction_id").unsigned();
            table.foreign("attraction_id").references("attractions.id");
            table.integer("city_id").unsigned();
            table.foreign("city_id").references("cities.id");
        })
    }

    const hasPostsType = await knex.schema.hasTable("posts_type");
    if (!hasPostsType) {
        await knex.schema.createTable("posts_type", (table) => {
            table.increments();
            table.integer("post_id").unsigned();
            table.foreign("post_id").references("posts.id");
            table.integer("interest_id").unsigned();
            table.foreign("interest_id").references("interests.id");
        })
    }

    const hasJobs = await knex.schema.hasTable("jobs");
    if (!hasJobs) {
        await knex.schema.createTable("jobs", (table) => {
            table.increments();
            table.string("title").notNullable();
        })
    }

    const hasUsers = await knex.schema.hasTable("users");
    if (!hasUsers) {
        await knex.schema.createTable("users", (table) => {
            table.increments();
            table.string("username").notNullable().unique;
            table.string("password").notNullable();
            table.string("first_name").notNullable();
            table.string("last_name").notNullable();
            table.string("birthday");
            table.string("gender");
            table.string("information");
            table.string("profile");
            table.string("email").notNullable();
            table.integer("phone_num").notNullable();
            table.integer("job_id").unsigned();
            table.foreign("job_id").references("jobs.id");
            table.string("emergency_contact_person");
            table.integer("emergency_contact_num");
            table.integer("country_id").unsigned();
            table.foreign("country_id").references("countries.id");
            table.boolean("isAdmin").notNullable();
            table.timestamps(true, true);
        })
    }

    const hasPostsContent = await knex.schema.hasTable("posts_content");
    if (!hasPostsContent) {
        await knex.schema.createTable("posts_content", (table) => {
            table.increments();
            table.integer("user_id").unsigned();
            table.foreign("user_id").references("users.id");
            table.integer("order_num").notNullable();
            table.string("content").notNullable();
            table.string("image");
            table.boolean("like_post").notNullable();
            table.integer("browse_count").notNullable();
            table.integer("post_id").unsigned();
            table.foreign("post_id").references("posts.id");
            table.timestamps(true, true);
        })
    }

    const hasUsersInterests = await knex.schema.hasTable("users_interests");
    if (!hasUsersInterests) {
        await knex.schema.createTable("users_interests", (table) => {
            table.increments();
            table.integer("user_id").unsigned();
            table.foreign("user_id").references("users.id");
            table.integer("interest_id").unsigned();
            table.foreign("interest_id").references("interests.id");
        })
    }

    const hasUsersLikeAttractions = await knex.schema.hasTable("users_like_attractions");
    if (!hasUsersLikeAttractions) {
        await knex.schema.createTable("users_like_attractions", (table) => {
            table.increments();
            table.integer("user_id").unsigned();
            table.foreign("user_id").references("users.id");
            table.integer("attraction_id").unsigned();
            table.foreign("attraction_id").references("attractions.id");
            table.boolean("like_attraction").notNullable();
            table.integer("browse_count").notNullable();
            table.timestamps(true, true);
        })
    }

    const hasUsersRelationship = await knex.schema.hasTable("users_relationship");
    if (!hasUsersRelationship) {
        await knex.schema.createTable("users_relationship", (table) => {
            table.increments();
            table.integer("user1_id").unsigned();
            table.foreign("user1_id").references("users.id");
            table.string("status").notNullable();
            table.integer("user2_id").unsigned();
            table.foreign("user2_id").references("users.id");
            table.timestamps(true, true);
        })
    }

    const hasChatRooms = await knex.schema.hasTable("chat_rooms");
    if (!hasChatRooms) {
        await knex.schema.createTable("chat_rooms", (table) => {
            table.increments();
            table.string("room_title").notNullable();
            table.integer("user_manager_id").unsigned();
            table.foreign("user_manager_id").references("users.id");
            table.integer("user_member_id").unsigned();
            table.foreign("user_member_id").references("users.id");
            table.timestamps(true, true);
        })
    }

    const hasChats = await knex.schema.hasTable("chats");
    if (!hasChats) {
        await knex.schema.createTable("chats", (table) => {
            table.increments();
            table.integer("chat_room_id").unsigned();
            table.foreign("chat_room_id").references("chat_rooms.id");
            table.integer("user_speech_id").unsigned();
            table.foreign("user_speech_id").references("users.id");
            table.string("content");
            table.string("image");
            table.string("voice");
            table.integer("user_listen_id").unsigned();
            table.foreign("user_listen_id").references("users.id");
            table.timestamps(true, true);
        })
    }
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists("chats");
    await knex.schema.dropTableIfExists("chat_rooms");
    await knex.schema.dropTableIfExists("users_relationship");
    await knex.schema.dropTableIfExists("users_like_attractions");
    await knex.schema.dropTableIfExists("users_interests");
    await knex.schema.dropTableIfExists("posts_content");
    await knex.schema.dropTableIfExists("users");
    await knex.schema.dropTableIfExists("jobs");
    await knex.schema.dropTableIfExists("posts_type");
    await knex.schema.dropTableIfExists("posts");
    await knex.schema.dropTableIfExists("attractions_type");
    await knex.schema.dropTableIfExists("interests");
    await knex.schema.dropTableIfExists("attractions");
    await knex.schema.dropTableIfExists("cities");
    await knex.schema.dropTableIfExists("currency_rates");
    await knex.schema.dropTableIfExists("currency_codes");
    await knex.schema.dropTableIfExists("countries");
}