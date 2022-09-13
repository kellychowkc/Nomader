CREATE DATABASE project_cap;

CREATE TABLE staging_emergency_datas (
    id SERIAL PRIMARY KEY,
    country_name TEXT NOT NULL,
    emergency_tel TEXT ARRAY,
    police_tel TEXT ARRAY,
    ambulance_tel TEXT ARRAY,
    fire_tel TEXT ARRAY,
    location_name TEXT ARRAY,
    calling_code TEXT ARRAY,
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



CREATE TABLE dim_country_names (
    id SERIAL PRIMARY KEY,
    country_name TEXT
);
CREATE UNIQUE INDEX country_names_unique_idx ON dim_country_names(country_name);

CREATE TABLE dim_locations (
    id SERIAL PRIMARY KEY,
    location_group TEXT
);

CREATE UNIQUE INDEX locations_unique_idx ON dim_locations(location_group);

CREATE TABLE dim_currency_codes (
    id SERIAL PRIMARY KEY,
    code TEXT
);

CREATE UNIQUE INDEX currency_codes_unique_idx ON dim_currency_codes(code);

CREATE TABLE dim_rate_dates (
    id SERIAL PRIMARY KEY,
    year INTEGER,
    month INTEGER,
    day INTEGER
);

CREATE UNIQUE INDEX rate_dates_unique_idx ON dim_rate_dates(year, month, day);


CREATE TABLE fact_emergency_datas (
    id SERIAL PRIMARY KEY,
    country_name_id INTEGER,
    FOREIGN KEY (country_name_id) REFERENCES dim_country_names(id),
    emergency_tel TEXT ARRAY,
    police_tel TEXT ARRAY,
    ambulance_tel TEXT ARRAY,
    fire_tel TEXT ARRAY,
    location_id INTEGER,
    FOREIGN KEY (location_id) REFERENCES dim_locations(id),
    calling_code TEXT ARRAY,
    info TEXT,
    currency_code_id INTEGER,
    FOREIGN KEY (currency_code_id) REFERENCES dim_currency_codes(id)
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
    currency_names TEXT
);

CREATE TABLE fact_code_rates (
    id SERIAL PRIMARY KEY,
    code_base_id INTEGER,
    FOREIGN KEY (code_base_id) REFERENCES dim_currency_codes(id),
    code_to_id INTEGER,
    FOREIGN KEY (code_to_id) REFERENCES dim_currency_codes(id),
    rate INTEGER,
    rate_date_id INTEGER,
    FOREIGN KEY (rate_date_id) REFERENCES dim_rate_dates(id) 
);
