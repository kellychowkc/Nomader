import { Knex } from "knex";
import { User } from "../utils/models";
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

    //add interest

    async getInterestByUserId(userId: number): Promise<[number]> {
        const foundInterest = await this.knex
            .select("*")
            .from("users_interests")
            .where("user_id", userId)
            .first();
        return foundInterest;
    }

    async getAllUser() {
        const allUsers = await this.knex
            .select("*")
            .from("users")
        return allUsers;
    }


}
