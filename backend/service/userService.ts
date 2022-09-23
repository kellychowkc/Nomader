import { Knex } from "knex";
import { BrowseCount, Post, User } from "../utils/models";
import { hashPassword } from "../utils/hash";

export class UserService {
    constructor(private knex: Knex) { }

    async getUserByUserName(username: string): Promise<User> {
        const user = await this.knex
            .select("*")
            .from("users")
            .where("username", username)
            .first();
        return user;
    }

    async getUserByUserId(userId: number): Promise<User> {
        const foundUser = await this.knex
            .select("*")
            .from("users")
            .where("id", userId)
            .first();
        return foundUser;
    }

    async create(body: User) {
        console.log(body);
        let {
            username,
            password,
            first_name,
            last_name,
            birthday,
            gender,
            information,
            profile,
            email,
            phone_num,
            job_id,
            country_id,
        } = body;

        password = await hashPassword(password);

        // check if repeated
        const nameResult = await this.knex
            .select("*")
            .from("users")
            .where("username", username);
        const emailResult = await this.knex
            .select("*")
            .from("users")
            .where("email", email);

        if (nameResult.length == 0 || emailResult.length == 0) {
            const createdUserId = await this.knex
                .insert({
                    username,
                    password,
                    first_name,
                    last_name,
                    birthday,
                    gender,
                    information,
                    profile,
                    email,
                    phone_num,
                    job_id,
                    country_id,
                    isAdmin: false,
                })
                .into("users")
                .returning("id");
            return createdUserId;
        }

        return;
    }

    async addInterest(userId: number, interestIdList: number[]) {
        const insertInterest = interestIdList.map((interestId) => ({
            user_id: userId,
            interest_id: interestId,
        }));

        const createdInterest = await this.knex
            .insert(insertInterest)
            .into("users_interests")
            .returning("id");
        return createdInterest;
    }

    async getInterestByUserId(userId: number): Promise<[number]> {
        const foundInterest = await this.knex
            .select("*")
            .from("users_interests")
            .where("user_id", userId)
            .first();
        return foundInterest;
    }

    async getAllUsersData() {
        const allUsersData = await this.knex
            .select("id", "username", "first_name", "last_name", "profile")
            .from("users");
        return allUsersData;
    }

    async getUserProfileData(username: string) {
        const userProfileData = await this.knex
            .select("*")
            .from("users")
            .where("username", username)
            .first();
        return userProfileData;
    }

    async addPost(postData: Post) {
        postData.user_id = +postData.user_id;
        console.log(postData);
        const createdPost = await this.knex
            .insert(postData)
            .into("posts")
            .returning("id");
        return createdPost;
    }

    async addUserBrowsePost(body: BrowseCount) {
        let { user_id, post_id } = body;

        console.log(user_id, post_id);
        const browseId = await this.knex
            .insert({
                user_id,
                post_id,
                browse_count: 1,
            })
            .into("users_browse_posts")
            .returning("id");
        return browseId;
    }

    async getUserFriends(user_id: number) {
        const userFriends = await this.knex
            .select("*")
            .from("users_relationship")
            .where("user1_id", user_id)
        return userFriends;
    }

    async updateUserPermission(username: string, permissions: any[]) {

        // const permission_visible = permissions[0]
        // const permission_matching = permissions[1]
        // const permission_post = permissions[2]
        // const permission_comment = permissions[3]
        // const permission_upload = permissions[4]

        // const userPermission = await this.knex("users")
        //     .update({
        //         isVisible: permission_visible,
        //         allowPost: permission_post,
        //         allowComment: permission_comment,
        //         allowUpload: permission_upload,
        //         allowMatch: permission_matching,
        //     })
        //     .where("username", username)

        const userPermission = "Update Permission"

        return userPermission;
    }
}
