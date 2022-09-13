import { Knex } from "knex";
import { User } from "../utils/models";
import { hashPassword } from "../utils/hash";

export class UserService {
    constructor(private knex: Knex) {}

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
            job,
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
        // const phoneNumResult = await this.knex
        //     .select("*")
        //     .from("users")
        //     .where("phone_num", phone_num);

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
                    job,
                })
                .into("users")
                .returning("id");
            return createdUserId;
        }
        return;
    }
}
