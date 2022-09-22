import { Knex } from "knex";
// import { Interest } from "../utils/models";

export class GetDataService {
    constructor(private knex: Knex) {}

    async getInterestData() {
        const interests = await this.knex.select("*").from("interests");

        return interests;
    }

    async getCountryData() {
        const countries: Array<{ id: number; name: string }> = await this.knex
            .select("id", "name")
            .from("countries");

        return countries;
    }

    async getPostData() {
        const latestPost = await this.knex
            .select(
                "users.username",
                "users.profile",
                "posts.id",
                "posts.title",
                "posts.content",
                " posts.image",
                "posts.created_at"
            )
            .from("posts")
            .innerJoin("users", "posts.user_id", "=", "users.id")
            .orderBy("posts.created_at", "DESC");
        return latestPost;
    }

    async getHotPostData() {
        const hotPostList = await this.knex
            .select(
                "users.username",
                "users.profile",
                "posts.id",
                "posts.title",
                "posts.content",
                "posts.image",
                "posts.created_at"
            )
            .from("posts")
            .innerJoin("users", "posts.user_id", "=", "users.id")
            .innerJoin(
                "users_browse_posts",
                "posts.id",
                "=",
                "users_browse_posts.post_id"
            )
            .groupBy(
                "users_browse_posts.post_id",
                "users.username",
                "users.profile",
                "posts.id",
                "posts.title",
                "posts.content",
                "posts.image",
                "posts.created_at"
            )
            .orderByRaw("SUM(browse_count) DESC");

        return hotPostList;
    }
}
