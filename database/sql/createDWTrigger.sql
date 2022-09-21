CREATE OR REPLACE FUNCTION insert_db_countries()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
    BEGIN
        INSERT INTO dim_countries
            (country_name)
            VALUES (NEW.name);
        RETURN NEW;
    END
$$;

CREATE TRIGGER trigger_insert_db_countries
AFTER INSERT ON DB_countries
FOR EACH ROW EXECUTE PROCEDURE insert_db_countries();



CREATE OR REPLACE FUNCTION insert_db_cities()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
    BEGIN
        INSERT INTO dim_cities
            (city_name, city_list)
            VALUES (NEW.name, NEW.city_list);
        RETURN NEW;
    END
$$;

CREATE TRIGGER trigger_insert_db_cities
AFTER INSERT ON DB_cities
FOR EACH ROW EXECUTE PROCEDURE insert_db_cities();



CREATE OR REPLACE FUNCTION insert_db_attractions()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
    BEGIN
        INSERT INTO dim_attractions
            (attraction_name, city_list)
            VALUES (NEW.name, NEW.city_list);
        RETURN NEW;
    END
$$;

CREATE TRIGGER trigger_insert_db_attractions
AFTER INSERT ON DB_attractions
FOR EACH ROW EXECUTE PROCEDURE insert_db_attractions();



CREATE OR REPLACE FUNCTION insert_db_interests()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
    BEGIN
        INSERT INTO dim_interests
            (title)
            VALUES (NEW.title);
        RETURN NEW;
    END
$$;

CREATE TRIGGER trigger_insert_db_interests
AFTER INSERT ON DB_interests
FOR EACH ROW EXECUTE PROCEDURE insert_db_interests();



CREATE OR REPLACE FUNCTION insert_db_jobs()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
    BEGIN
        INSERT INTO dim_jobs
            (title)
            VALUES (NEW.title);
        RETURN NEW;
    END
$$;

CREATE TRIGGER trigger_insert_db_jobs
AFTER INSERT ON DB_jobs
FOR EACH ROW EXECUTE PROCEDURE insert_db_attractions();


CREATE OR REPLACE FUNCTION insert_db_chat_rooms()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
    DECLARE
        created_date_id INTEGER;
    BEGIN
        INSERT INTO dim_dates
            (year, month, day)
            VALUES (NEW.created_year, NEW.created_month, NEW.created_day)
            ON CONFLICT(year, month, day)
            DO NOTHING
            RETURNING id
            INTO created_date_id;
        INSERT INTO fact_chat_rooms
            (created_date_id)
            VALUES (created_date_id);
        RETURN NEW;
    END
$$;

CREATE TRIGGER trigger_insert_db_chat_rooms
AFTER INSERT ON DB_chat_rooms
FOR EACH ROW EXECUTE PROCEDURE insert_db_chat_rooms();



CREATE OR REPLACE FUNCTION insert_db_chats()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
    DECLARE
        created_date_id INTEGER;
    BEGIN
        INSERT INTO dim_dates
            (year, month, day)
            VALUES (NEW.created_year, NEW.created_month, NEW.created_day)
            ON CONFLICT(year, month, day)
            DO NOTHING
            RETURNING id
            INTO created_date_id;
        INSERT INTO fact_chats
            (chat_room_id, created_date_id)
            VALUES (NEW.chat_room_id, created_date_id);
        RETURN NEW;
    END
$$;

CREATE TRIGGER trigger_insert_db_chats
AFTER INSERT ON DB_chats
FOR EACH ROW EXECUTE PROCEDURE insert_db_chats();



CREATE OR REPLACE FUNCTION insert_db_users()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
    DECLARE
        birthday_id INTEGER;
        created_date_id INTEGER;
        gender_id INTEGER;
    BEGIN
        INSERT INTO dim_genders
            (status)
            VALUES (NEW.gender)
            ON CONFLICT(status)
            DO NOTHING
            RETURNING id
            INTO gender_id;
        INSERT INTO dim_dates
            (year, month, day)
            VALUES (NEW.birthday_year, NEW.birthday_month, NEW.birthday_day)
            ON CONFLICT(year, month, day)
            DO NOTHING
            RETURNING id
            INTO birthday_id;
        INSERT INTO dim_dates
            (year, month, day)
            VALUES (NEW.created_year, NEW.created_month, NEW.created_day)
            ON CONFLICT(year, month, day)
            DO NOTHING
            RETURNING id
            INTO created_date_id;
        INSERT INTO fact_users_data 
            (country_id, interest_id, birthday_id, created_date_id, job_id, gender_id)
            VALUES (NEW.country_id, NEW.interest_id, birthday_id, created_date_id, NEW.job_id, gender_id);
        RETURN NEW;
    END
$$;

CREATE TRIGGER trigger_insert_db_users
AFTER INSERT ON DB_users
FOR EACH ROW EXECUTE PROCEDURE insert_db_users();




CREATE OR REPLACE FUNCTION insert_db_users_relationship()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
    DECLARE
        created_date_id INTEGER;
    BEGIN
        INSERT INTO dim_dates
            (year, month, day)
            VALUES (NEW.created_year, NEW.created_month, NEW.created_day)
            ON CONFLICT(year, month, day)
            DO NOTHING
            RETURNING id
            INTO created_date_id;
        INSERT INTO fact_users_relactionship
            (user1_id, user2_id, created_date_id)
            VALUES (NEW.user1_id, NEW.user2_id, created_date_id);
        RETURN NEW;
    END
$$;

CREATE TRIGGER trigger_insert_db_users_relactionship
AFTER INSERT ON DB_users_relationship
FOR EACH ROW EXECUTE PROCEDURE insert_db_users_relationship();




CREATE OR REPLACE FUNCTION insert_db_like_attractions()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
    DECLARE
        created_date_id INTEGER;
    BEGIN
        INSERT INTO dim_dates
            (year, month, day)
            VALUES (NEW.created_year, NEW.created_month, NEW.created_day)
            ON CONFLICT(year, month, day)
            DO NOTHING
            RETURNING id
            INTO created_date_id;
        INSERT INTO fact_like_attractions
            (user_id, attraction_id, like_attraction, browse_count, created_date_id)
            VALUES (NEW.user_id, NEW.attraction_id, NEW.attraction_id, NEW.browse_count, created_date_id);
        RETURN NEW;
    END
$$;

CREATE TRIGGER trigger_insert_db_like_attractions
AFTER INSERT ON DB_like_attractions
FOR EACH ROW EXECUTE PROCEDURE insert_db_like_attractions();




CREATE OR REPLACE FUNCTION insert_db_users_interests()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
    BEGIN
        INSERT INTO fact_users_interests
            (user_id, interest_id)
            VALUES (NEW.user_id, NEW.interest_id);
        RETURN NEW;
    END
$$;

CREATE TRIGGER trigger_insert_db_users_interests
AFTER INSERT ON DB_users_interests
FOR EACH ROW EXECUTE PROCEDURE insert_db_users_interests();




CREATE OR REPLACE FUNCTION insert_db_posts()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
    DECLARE
        created_date_id INTEGER;
    BEGIN
        INSERT INTO dim_dates
            (year, month, day)
            VALUES (NEW.created_year, NEW.created_month, NEW.created_day)
            ON CONFLICT(year, month, day)
            DO NOTHING
            RETURNING id
            INTO created_date_id;
        INSERT INTO fact_posts
            (user_id, city_id, attraction_id, created_date_id)
            VALUES (NEW.user_id, NEW.city_id, NEW.attraction_id, created_date_id);
        RETURN NEW;
    END
$$;

CREATE TRIGGER trigger_insert_db_posts
AFTER INSERT ON DB_posts
FOR EACH ROW EXECUTE PROCEDURE insert_db_posts();




CREATE OR REPLACE FUNCTION insert_db_users_browse_posts()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
    BEGIN
        INSERT INTO fact_users_browse_posts
            (user_id, post_id, browse_count)
            VALUES (NEW.user_id, NEW.post_id, NEW.browse_count);
        RETURN NEW;
    END
$$;

CREATE TRIGGER trigger_insert_db_users_browse_posts
AFTER INSERT ON DB_users_browse_posts
FOR EACH ROW EXECUTE PROCEDURE insert_db_users_browse_posts();





CREATE OR REPLACE FUNCTION insert_db_posts_type()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
    BEGIN
        INSERT INTO fact_posts_type
            (interest_id, post_id)
            VALUES (NEW.interest_id, NEW.post_id);
        RETURN NEW;
    END
$$;

CREATE TRIGGER trigger_insert_db_posts_type
AFTER INSERT ON DB_posts_type
FOR EACH ROW EXECUTE PROCEDURE insert_db_posts_type();