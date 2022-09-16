CREATE DATABASE project_cap;

CREATE TABLE staging_emergency_datas (
    id SERIAL PRIMARY KEY,
    country_name TEXT,
    emergency_tel TEXT,
    police_tel TEXT,
    ambulance_tel TEXT,
    fire_tel TEXT,
    location_group TEXT,
    calling_code TEXT,
    info TEXT
);

CREATE TABLE staging_currency_codes_countries (
    id SERIAL PRIMARY KEY,
    code TEXT,
    currency_name TEXT,
    using_country TEXT
);

CREATE TABLE staging_currency_rates (
    id SERIAL PRIMARY KEY,
    year INTEGER,
    month INTEGER,
    day INTEGER,
    code_base TEXT,
    code_to TEXT,
    rate TEXT
);

CREATE TABLE staging_city_datas (
    id SERIAL PRIMARY KEY,
    city_name TEXT,
    description TEXT,
    image TEXT,
    country TEXT
);

CREATE TABLE staging_attractions (
    id SERIAL PRIMARY KEY,
    attraction_name TEXT,
    description TEXT,
    image TEXT,
    tel_num TEXT,
    address TEXT,
    city TEXT,
    country TEXT,
    open_time TEXT,
    website TEXT,
    class TEXT
);


CREATE TABLE DB_users (
    id SERIAL PRIMARY KEY,
    birthday TEXT,
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

CREATE TABLE DB_chat_rooms (
    id SERIAL PRIMARY KEY,
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

CREATE TABLE DB_posts (
    id SERIAL PRIMARY KEY,
    city_id INTEGER
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



CREATE TABLE dim_dates (
    id SERIAL PRIMARY KEY,
    year INTEGER,
    month INTEGER,
    day INTEGER
);
CREATE UNIQUE INDEX dates_unique_idx ON dim_dates(year, month, day);

CREATE TABLE dim_country_names (
    id SERIAL PRIMARY KEY,
    country_name TEXT
);
CREATE UNIQUE INDEX country_names_unique_idx ON dim_country_names(country_name);

CREATE TABLE dim_currency_codes (
    id SERIAL PRIMARY KEY,
    code TEXT
);
CREATE UNIQUE INDEX currency_codes_unique_idx ON dim_currency_codes(code);

CREATE TABLE dim_jobs (
    id SERIAL PRIMARY KEY,
    title TEXT
);
CREATE UNIQUE INDEX jobs_unique_idx ON dim_jobs(title);

CREATE TABLE dim_interests (
    id SERIAL PRIMARY KEY,
    title TEXT
);
CREATE UNIQUE INDEX interests_unique_idx ON dim_interests(title);

CREATE TABLE dim_class (
    id SERIAL PRIMARY KEY,
    title TEXT
);
CREATE UNIQUE INDEX class_unique_idx ON dim_class(title);


CREATE TABLE fact_emergency_datas (
    id SERIAL PRIMARY KEY,
    country_name_id INTEGER,
    FOREIGN KEY (country_name_id) REFERENCES dim_country_names(id),
    emergency_tel TEXT,
    police_tel TEXT,
    ambulance_tel TEXT,
    fire_tel TEXT,
    location_group TEXT,
    calling_code TEXT,
    info TEXT,
    currency_code_id INTEGER,
    FOREIGN KEY (currency_code_id) REFERENCES dim_currency_codes(id)
);

CREATE TABLE fact_city_datas (
    id SERIAL PRIMARY KEY,
    city_name TEXT,
    description TEXT,
    image TEXT,
    country_id INTEGER,
    FOREIGN KEY (country_id) REFERENCES dim_country_names(id)
);

CREATE TABLE fact_currency_countries (
    id SERIAL PRIMARY KEY,
    country_name_id INTEGER,
    FOREIGN key (country_name_id) REFERENCES dim_country_names(id),
    currency_code_id INTEGER,
    FOREIGN key (currency_code_id) REFERENCES dim_currency_codes(id)
);

CREATE TABLE fact_currency_names (
    id SERIAL PRIMARY KEY,
    currency_code_id INTEGER,
    FOREIGN KEY (currency_code_id) REFERENCES dim_currency_codes(id),
    currency_name TEXT
);

CREATE TABLE fact_code_rates (
    id SERIAL PRIMARY KEY,
    code_base_id INTEGER,
    FOREIGN KEY (code_base_id) REFERENCES dim_currency_codes(id),
    code_to_id INTEGER,
    FOREIGN KEY (code_to_id) REFERENCES dim_currency_codes(id),
    rate INTEGER,
    date_id INTEGER,
    FOREIGN KEY (date_id) REFERENCES dim_dates(id) 
);

CREATE TABLE fact_users (
    id SERIAL PRIMARY KEY,
    interest_id INTEGER,
    FOREIGN KEY (interest_id) REFERENCES dim_interests(id),
    birthday_id INTEGER,
    FOREIGN KEY (birthday_id) REFERENCES dim_dates(id),
    gender TEXT,
    job_id INTEGER,
    FOREIGN KEY (job_id) REFERENCES dim_jobs(id),
    country_id INTEGER,
    FOREIGN KEY (country_id) REFERENCES dim_country_names(id),
    created_date_id INTEGER,
    FOREIGN KEY (created_date_id) REFERENCES dim_dates(id)
);

CREATE TABLE fact_users_relationship (
    id SERIAL PRIMARY KEY,
    status TEXT,
    created_date_id INTEGER,
    FOREIGN KEY (created_date_id) REFERENCES dim_dates(id)
);

CREATE TABLE fact_chat_rooms (
    id SERIAL PRIMARY KEY,
    created_date_id INTEGER,
    FOREIGN KEY (created_date_id) REFERENCES dim_dates(id)
);

CREATE TABLE fact_posts (
    id SERIAL PRIMARY KEY,
    city_id INTEGER,
    FOREIGN KEY (city_id) REFERENCES fact_city_datas(id)
);

CREATE TABLE fact_post_type (
    id SERIAL PRIMARY KEY,
    post_id INTEGER,
    FOREIGN KEY (post_id) REFERENCES fact_posts(id),
    interest_id INTEGER,
    FOREIGN KEY (interest_id) REFERENCES dim_interests(id)
);

CREATE TABLE fact_post_content (
    id SERIAL PRIMARY KEY,
    post_id INTEGER,
    FOREIGN KEY (post_id) REFERENCES fact_posts(id),
    order_num INTEGER,
    like_post BOOLEAN,
    browse_count INTEGER,
    created_date_id INTEGER,
    FOREIGN KEY (created_date_id) REFERENCES dim_dates(id)
);

CREATE TABLE fact_attractions (
    id SERIAL PRIMARY KEY,
    attraction_name TEXT,
    description TEXT,
    image TEXT,
    tel_num TEXT,
    address TEXT,
    city_id INTEGER,
    FOREIGN KEY (city_id) REFERENCES fact_city_datas(id),
    open_time TEXT,
    website TEXT
);

CREATE TABLE fact_attractions_class (
    id SERIAL PRIMARY KEY,
    attraction_id INTEGER,
    FOREIGN KEY (attraction_id) REFERENCES fact_attractions(id),
    class_id INTEGER,
    FOREIGN KEY (class_id) REFERENCES dim_class(id)
);

CREATE TABLE fact_like_attractions (
    id SERIAL PRIMARY KEY,
    attraction_id INTEGER,
    FOREIGN KEY (attraction_id) REFERENCES fact_attractions(id),
    like_attraction BOOLEAN,
    browse_count INTEGER,
    created_date_id INTEGER,
    FOREIGN KEY (created_date_id) REFERENCES dim_dates(id)
);