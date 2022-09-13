CREATE OR REPLACE FUNCTION insert_emergency_datas() 
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
    DECLARE
        country_name_id INTEGER;
        location_id INTEGER;
    BEGIN
        INSERT INTO dim_locations 
            (location_group) 
            VALUES (NEW.location_group) 
            ON CONFLICT(location_group)
            DO NOTHING
            RETURNING id 
            INTO location_id;

        INSERT INTO dim_country_names 
            (country_name) 
            VALUES (NEW.country_name) 
            ON CONFLICT(country_name)
            DO NOTHING
            RETURNING id 
            INTO country_name_id;

        INSERT INTO fact_emergency_datas 
            (country_name_id, emergency_tel, police_tel, ambulance_tel, fire_tel, location_id, calling_code, info)
            VALUES (country_name_id, NEW.emergency_tel, NEW.police_tel, NEW.ambulance_tel, NEW.fire_tel, location_id, NEW.calling_code, NEW.info);

        RETURN NEW;
    END
$$;

CREATE OR REPLACE TRIGGER trigger_insert_emergency_datas
AFTER INSERT ON staging_emergency_datas
FOR EACH ROW EXECUTE PROCEDURE insert_emergency_datas();




CREATE OR REPLACE FUNCTION insert_currency_codes_countries() 
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
    DECLARE
        currency_code_id INTEGER;
        country_name_id INTEGER;
    BEGIN
        INSERT INTO dim_currency_codes
            (code) 
            VALUES (NEW.code) 
            ON CONFLICT(code)
            DO NOTHING
            RETURNING id 
            INTO currency_code_id;

        INSERT INTO fact_currency_names
            (currency_code_id, currency_name)
            VALUES (currency_code_id, NEW.currency_name);
        
        SELECT id
            FROM dim_country_names
            WHERE country_name LIKE NEW.using_country
            INTO country_name_id;

        INSERT INTO fact_currency_countries
            (currency_code_id, country_name_id)
            VALUES (currency_code_id, country_name_id);

        UPDATE fact_emergency_datas
            SET currency_code_id = currency_code_id
            WHERE country_name_id = country_name_id;

        RETURN NEW;
    END
$$;

CREATE OR REPLACE TRIGGER trigger_insert_currency_codes_countries
AFTER INSERT ON staging_currency_codes_countries
FOR EACH ROW EXECUTE PROCEDURE insert_currency_codes_countries();




CREATE OR REPLACE FUNCTION insert_currency_rates()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
    DECLARE
        code_base_id INTEGER;
        code_to_id INTEGER;
        rate_date_id INTEGER;
    BEGIN
        INSERT INTO dim_rate_dates
            (year, month, day)
            VALUES (NEW.year, NEW.month, NEW.day)
            ON CONFLICT(year, month, day)
            DO NOTHING
            RETURNING id
            INTO rate_date_id;
        
        SELECT id
            FROM dim_currency_codes
            WHERE code = NEW.code_base
            INTO code_base_id;
        
        SELECT id
            FROM dim_currency_codes
            WHERE code = NEW.code_to
            INTO code_to_id;

        INSERT INTO fact_code_rates
            (code_base_id, code_to_id, rate, rate_date_id)
            VALUES (code_base_id, code_to_id, NEW.rate, rate_date_id);
            
        RETURN NEW;
    END
$$;

CREATE OR REPLACE TRIGGER trigger_insert_currency_rates
AFTER INSERT ON staging_currency_rates
FOR EACH ROW EXECUTE PROCEDURE insert_currency_rates();
