CREATE DATABASE cap_project;

CREATE TABLE attractions (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    image TEXT,
    tel_num TEXT,
    address TEXT NOT NULL,
    open_time TEXT,
    website TEXT,
    class TEXT
);

CREATE TABLE interests (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL
);

CREATE TABLE attreactions_type (
    id SERIAL PRIMARY KEY,
    attraction_id INTEGER,
    interest_id INTEGER,
    FOREIGN KEY (attraction_id) REFERENCES attractions(id),
    FOREIGN KEY (interest_id) REFERENCES interests(id)
);

CREATE TABLE countries (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    tel_code TEXT NOT NULL,
    location TEXT NOT NULL,
    emergency_tel TEXT,
    police_tel TEXT,
    ambulance_tel TEXT,
    fire_tel TEXT,
    info TEXT
);

CREATE TABLE currency_codes (
    id SERIAL PRIMARY KEY,
    code TEXT NOT NULL,
    currency_name TEXT NULL,
    country_id INTEGER,
    FOREIGN KEY (country_id) REFERENCES countries(id)
);

CREATE TABLE currency_rates (
    id SERIAL PRIMARY KEY,
    code_base_id INTEGER,
    FOREIGN KEY (code_base_id) REFERENCES currency_codes(id),
    rate INTEGER,
    code_to_id INTEGER,
    FOREIGN KEY (code_to_id) REFERENCES currency_codes(id),
    year INTEGER,
    month INTEGER,
    day INTEGER
)

CREATE TABLE cities (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    image TEXT,
    country_id INTEGER,
    FOREIGN KEY (country_id) REFERENCES countries(id)
);

CREATE TABLE cities_attractions (
    id SERIAL PRIMARY KEY,
    attraction_id INTEGER,
    country_id INTEGER,
    FOREIGN KEY (attraction_id) REFERENCES attractions(id),
    FOREIGN KEY (country_id) REFERENCES countries(id)
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    city_id INTEGER,
    FOREIGN KEY (city_id) REFERENCES cities(id)
);

CREATE TABLE posts_type (
    id SERIAL PRIMARY KEY,
    interest_id INTEGER,
    post_id INTEGER,
    FOREIGN KEY (interest_id) REFERENCES interests(id),
    FOREIGN KEY (post_id) REFERENCES posts(id)
);

CREATE TABLE jobs (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    birthday TEXT,
    gender TEXT,
    information TEXT,
    profile TEXT,
    email TEXT NOT NULL,
    phone_num INTEGER NOT NULL,
    job_id INTEGER,
    emergency_contact_person TEXT,
    emergency_contact_num INTEGER,
    country_id INTEGER,
    isAdmin BOOLEAN NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (job_id) REFERENCES jobs(id),
    FOREIGN KEY (country_id) REFERENCES countries(id)
);

CREATE TABLE posts_content (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    order_num INTEGER NOT NULL,
    content TEXT NOT NULL,
    image TEXT,
    like_post BOOLEAN NOT NULL,
    browse_count INTEGER NOT NULL,
    post_id INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (post_id) REFERENCES posts(id)
);

CREATE TABLE users_interests (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    interest_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (interest_id) REFERENCES interests(id)
);

CREATE TABLE users_like_attractions (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    attraction_id INTEGER,
    like_attraction BOOLEAN NOT NULL,
    browse_count INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (attraction_id) REFERENCES attracions(id)
);

CREATE TABLE users_relationship (
    id SERIAL PRIMARY KEY,
    user1_id INTEGER,
    status TEXT NOT NULL,
    user2_id INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user1_id) REFERENCES users(id),
    FOREIGN KEY (user2_id) REFERENCES users(id)
);

CREATE TABLE chat_rooms (
    id SERIAL PRIMARY KEY,
    room_title TEXT NOT NULL,
    user_manager_id INTEGER,
    user_member_id INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_manager_id) REFERENCES users(id),
    FOREIGN KEY (user_member_id) REFERENCES users(id)
);

CREATE TABLE chats (
    id SERIAL PRIMARY KEY,
    chat_romm_id INTEGER,
    user_speech_id INTEGER,
    content TEXT,
    image TEXT,
    voice TEXT,
    user_listen_id INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_speech_id) REFERENCES users(id),
    FOREIGN KEY (user_listen_id) REFERENCES users(id)
);