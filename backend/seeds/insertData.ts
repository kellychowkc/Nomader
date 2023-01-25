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
            { name: "Korea", emergency_tel: "112" },
            { name: "UK", emergency_tel: "999" },
            { name: "US", emergency_tel: "911" },
        ])
        .returning("name");

    const cityId: Array<{ id: number; name: string }> = await knex("cities")
        .insert([
            { name: "San_Francisco", description: "good" },
            { name: "Los_Angeles", description: "excellent" },
            { name: "London", description: "perfect" },
            { name: "Oxford", description: "good" },
            { name: "Toronto", description: "chill" },
            { name: "Orlando", description: "love it" },
        ])
        .returning("id");

    const attractionId: Array<{ id: number }> = await knex("attractions")
        .insert([
            {
                name: "Hollywood",
                description:
                    "Hollywood is a neighborhood located in Los Angeles, California, that's also synonymous with the glamour, money and power of the entertainment industry. ",
                image: `url(https://cdn.britannica.com/99/100099-050-17B6FE50/sign-Hollywood-Los-Angeles.jpg")`,
                city_list: "Los_Angeles",
            },
            {
                name: "Golden Gate",
                description:
                    "The Golden Gate Bridge is a suspension bridge spanning the Golden Gate",
                image: `url("https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGolden_Gate_Bridge&psig=AOvVaw0Iw3Un-3kghHZpkjMfmN81&ust=1674691444826000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOi3gfe14fwCFQAAAAAdAAAAABAE")`,
                city_list: "San_Francisco",
            },
            {
                name: "London Eye",
                description:
                    "The London Eye, or the Millennium Wheel, is a cantilevered observation wheel on the South Bank of the River Thames in London. ",
                image: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/London-Eye-2009.JPG/500px-London-Eye-2009.JPG")`,
                city_list: "London",
            },
            {
                name: "Oxford",
                description:
                    "Oxford University provides world-class research and education to benefit society on a local, regional, national and global scale.",
                image: `url("https://media.gq-magazine.co.uk/photos/5d139a49bc4bf64ef07f0890/master/pass/Aerial-hp--GQ-25aug17_alamy_b.jpg")`,
                city_list: "Oxford",
            },
            {
                name: "Walt Disney World",
                description:
                    "The Walt Disney World Resort, also called Walt Disney World or Disney World, is an entertainment resort complex",
                image: `url("https://www.gannett-cdn.com/presto/2020/03/13/USAT/1c2efdbb-5801-4f59-860b-ff0874040fb6-VPC_CORONAVIRUS_CLOSES_DISNEY_PARKS_DESK_THUMB.jpg?crop=1911,1075,x2,y2&width=1600&height=800&format=pjpg&auto=webp")`,
                city_list: "Orlando",
            },
            {
                name: "CN Tower",
                description:
                    "At a height of 553 metres, the communications spire stands over the city like a beacon. Queues can be long and tickets are expensive, but the wait and the cost are worth it. ",
                image: `url("https://lp-cms-production.imgix.net/2021-06/GettyRF_155378722.jpg?auto=format&w=640&h=360&ar=16:9&fit=crop&crop=center&format=auto&q=75")`,
                city_list: "Toronto",
            },
        ])
        .returning("id");

    console.log(countryId, attractionId, cityId, "break");
}
