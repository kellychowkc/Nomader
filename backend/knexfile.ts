import type { Knex } from "knex";
import dotnev from "dotenv";
dotnev.config();

const config: { [key: string]: Knex.Config } = {
    development: {
        client: "postgresql",
        connection: {
            database: process.env.DB_NAME,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
        },
    },
    test: {
        client: "postgresql",
        connection: {
            database: process.env.DB_NAME,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
        },
    },

    staging: {
        client: "postgresql",
        connection: {
            database: "my_db",
            user: "username",
            password: "password",
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
        },
    },

    production: {
        client: "postgresql",
        connection: {
            host: "postgres",
            database: process.env.PRODUCTION_DB,
            user: process.env.PRODUCTION_DB_USERNAME,
            password: process.env.PRODUCTION_DB_PASSWORD,
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
        },
    },
};

module.exports = config;
const knexConfigs = config;
export default knexConfigs;
