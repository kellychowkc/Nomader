
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
    image TEXT
);

CREATE TABLE staging_attractions (
    id SERIAL PRIMARY KEY,
    attraction_name TEXT,
    description TEXT,
    image TEXT,
    address TEXT,
    city_list TEXT,
    open_time TEXT,
    class TEXT
);

