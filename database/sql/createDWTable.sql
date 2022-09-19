CREATE DATABASE project_cap;

CREATE TABLE DB_users (
    id SERIAL PRIMARY KEY,
    birthday_year INTEGER,
    birthday_month INTEGER,
    birthday_day INTEGER,
    gender TEXT,
    job_id INTEGER,
    interest_id INTEGER,
    cuntry_id INTEGER,
    created_year INTEGER,
    created_month INTEGER,
    created_day INTEGER
);

CREATE TABLE DB_jobs (
    id SERIAL PRIMARY KEY,
    title TEXT
);

CREATE TABLE DB_interests (
    id SERIAL PRIMARY KEY,
    title TEXT
);

CREATE TABLE DB_users_interests (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    interest_id INTEGER
);

CREATE TABLE DB_chat_rooms (
    id SERIAL PRIMARY KEY,
    created_year INTEGER,
    created_month INTEGER,
    created_day INTEGER
);

CREATE TABLE DB_chats (
    id SERIAL PRIMARY KEY,
    chat_room_id INTEGER,
    created_year INTEGER,
    created_month INTEGER,
    created_day INTEGER
);

CREATE TABLE DB_users_relationship (
    id SERIAL PRIMARY KEY,
    created_year INTEGER,
    created_month INTEGER,
    created_day INTEGER
);

CREATE TABLE DB_like_attractions (
    id SERIAL PRIMARY KEY,
    like_attraction BOOLEAN,
    browse_count INTEGER,
    attraction_id INTEGER,
    created_year INTEGER,
    created_month INTEGER,
    created_day INTEGER 
);

CREATE TABLE DB_countries (
    id SERIAL PRIMARY KEY,
    country_name TEXT
);

CREATE TABLE DB_cities (
    id SERIAL PRIMARY KEY,
    city_name TEXT,
    country_id INTEGER
);

CREATE TABLE DB_posts (
    id SERIAL PRIMARY KEY,
    city_id INTEGER,
    attraction_id INTEGER
);

CREATE TABLE DB_post_content (
    id SERIAL PRIMARY KEY,
    post_id INTEGER,
    order_num INTEGER,
    like_post BOOLEAN,
    browse_count INTEGER,
    created_year INTEGER,
    created_month INTEGER,
    created_day INTEGER
);

CREATE TABLE DB_post_type (
    id SERIAL PRIMARY KEY,
    post_id INTEGER,
    interest_id INTEGER
);

