import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("countries").del();
    await knex("cities").del();
    await knex("attractions").del();

    const countryId: Array<{ id: number }> = await knex("countries")
        .insert([
            { name: "Australia", emergency_tel: "000" },
            { name: "Canada", emergency_tel: "911" },
            { name: "China", emergency_tel: "119" },
            { name: "Denmark", emergency_tel: "112" },
            { name: "Germany", emergency_tel: "112" },
            { name: "Italy", emergency_tel: "112" },
            { name: "Japan", emergency_tel: "110" },
            { name: "Korea", emergency_tel: "hiking.png" },
            { name: "UK", emergency_tel: "hiking.png" },
            { name: "US", emergency_tel: "hiking.png" },
        ])
        .returning("name");

    const cityId: Array<{ id: number; name: string }> = await knex("cities")
        .insert([
            { name: "hongkong", description: "good" },
            { name: "hongkong", description: "good" },
            { name: "hongkong", description: "good" },
            { name: "hongkong", description: "good" },
            { name: "hongkong", description: "good" },
            { name: "hongkong", description: "good" },
            { name: "hongkong", description: "good" },
            { name: "hongkong", description: "good" },
            { name: "hongkong", description: "good" },
            { name: "hongkong", description: "good" },
        ])
        .returning("id");

    const attractionId: Array<{ id: number }> = await knex("attractions")
        .insert([
            {
                name: "Disney",
                description: "hi",
                image: `url("https://media-cdn.tripadvisor.com/media/photo-w/14/b3/aa/b3/911-memorial-nyc.jpg")`,
                city_list: "hongkong",
            },
            {
                name: "Disney",
                description: "hi",
                image: `url("https://media-cdn.tripadvisor.com/media/photo-w/14/b3/aa/b3/911-memorial-nyc.jpg")`,
                city_list: "hongkong",
            },
            {
                name: "Disney",
                description: "hi",
                image: `url("https://media-cdn.tripadvisor.com/media/photo-w/14/b3/aa/b3/911-memorial-nyc.jpg")`,
                city_list: "hongkong",
            },
            {
                name: "Disney",
                description: "hi",
                image: `url("https://media-cdn.tripadvisor.com/media/photo-w/14/b3/aa/b3/911-memorial-nyc.jpg")`,
                city_list: "hongkong",
            },
            {
                name: "Disney",
                description: "hi",
                image: `url("https://media-cdn.tripadvisor.com/media/photo-w/14/b3/aa/b3/911-memorial-nyc.jpg")`,
                city_list: "hongkong",
            },
            {
                name: "Disney",
                description: "hi",
                image: `url("https://media-cdn.tripadvisor.com/media/photo-w/14/b3/aa/b3/911-memorial-nyc.jpg")`,
                city_list: "hongkong",
            },
            {
                name: "Disney",
                description: "hi",
                image: `url("https://media-cdn.tripadvisor.com/media/photo-w/14/b3/aa/b3/911-memorial-nyc.jpg")`,
                city_list: "hongkong",
            },
            {
                name: "Disney",
                description: "hi",
                image: `url("https://media-cdn.tripadvisor.com/media/photo-w/14/b3/aa/b3/911-memorial-nyc.jpg")`,
                city_list: "hongkong",
            },
            {
                name: "Disney",
                description: "hi",
                image: `url("https://media-cdn.tripadvisor.com/media/photo-w/14/b3/aa/b3/911-memorial-nyc.jpg")`,
                city_list: "hongkong",
            },
            {
                name: "Disney",
                description: "hi",
                image: `url("https://media-cdn.tripadvisor.com/media/photo-w/14/b3/aa/b3/911-memorial-nyc.jpg")`,
                city_list: "hongkong",
            },
        ])
        .returning("id");

    console.log(countryId, attractionId, cityId, "break");
}
