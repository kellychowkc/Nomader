import installPackage
import schedule
import time
from config import Config
from sparkSetting import setup_spark

config = Config()
spark = setup_spark(config)

import pyspark.sql.functions as F

def extract_data(spark, config, table) :
    return spark.read.format('jdbc')\
            .option("url", "jdbc:postgresql://{}/{}".format(config.POSTGRES_HOST, config.POSTGRES_DB))\
            .option("dbtable", "countries".format(table))\
            .option("user", config.POSTGRES_USER)\
            .option("password", config.POSTGRES_PASSWORD)\
            .option("driver", "org.postgresql.Driver")\
            .load()

def load_data(df, config, table):
    df.write.format('jdbc')\
        .option("url", "jdbc:postgresql://{}/{}".format(config.POSTGRES_HOST, config.POSTGRES_DW))\
        .option("dbtable", "{}".format(table))\
        .option("user", config.POSTGRES_USER)\
        .option("password", config.POSTGRES_PASSWORD)\
        .option("driver", "org.postgresql.Driver")\
        .mode('append')\
        .save()

def transform_table_created_at(df) :
    df = df.drop('updated_at')
    df = df.withCloumn('created_year', F.year(df['created_at']))
    df = df.withCloumn('created_month', F.month(df['created_at']))
    df = df.withCloumn('created_day', F.dayofmonth(df['created_at']))
    df = df.drop('created_at')
    return df

def transform_table_countries(df) :
    df = df.drop('tel_code')
    df = df.drop('location_group')
    df = df.drop('emergency_tel')
    df = df.drop('police_tel')
    df = df.drop('ambulace_tel')
    df = df.drop('fire_tel')
    df = df.drop('info')
    return df

def transform_table_cities(df) :
    df = df.drop('decsription')
    df = df.drop('image')
    return df

def transform_table_attractions(df) :
    df = df.drop('description')
    df = df.drop('image')
    df = df.drop('address')
    df = df.drop('open_time')
    df = df.drop('class')
    return df

def transform_table_interests(df) : 
    df = df.drop('imaage')
    return df

def transform_table_chat_rooms(df) :
    df = df.drop('room_title')
    df = transform_table_created_at(df)
    return df

def transform_table_chats(df) :
    df = df.drop('content')
    df = df.drop('image')
    df = df.drop('voice')
    df = transform_table_created_at(df)
    return df

def transform_table_users(df) :
    df = df.drop('username')
    df = df.drop('password')
    df = df.drop('first_name')
    df = df.drop('last_name')
    df = df.drop('information')
    df = df.drop('profile')
    df = df.drop('email')
    df = df.drop('phone_num')
    df = df.drop('emergency_contact_person')
    df = df.drop('emergency_contact_num')
    from pyspark.sql.types import DateType
    df = df.withColumn('birthday', F('birthday').cast(DateType()))
    df = df.withCloumn('brithday_year', F.year(df['birthday']))
    df = df.withCloumn('birthday_month', F.month(df['birthday']))
    df = df.withCloumn('birthday_day', F.dayofmonth(df['birthday']))
    df = df.drop('created_at')
    df = transform_table_created_at(df)
    return df

def transform_table_users_relationship(df) :
    df = df.drop('status')
    df = transform_table_created_at(df)
    return df

def transform_table_like_attractions(df) :
    df = transform_table_created_at(df)
    return df

def transform_table_posts(df) :
    df = df.drop('title')
    return df

def transform_table_posts_content(df) :
    df = df.drop('content')
    df = df.drop('image')
    df = transform_table_created_at(df)
    return df


def main() :
    df_countries = extract_data(spark, config, 'countries')
    df_countries = transform_table_countries(df_countries)
    load_data(df_countries, config, 'DB_countries')

    df_cities = extract_data(spark, config, 'cities')
    df_cities = transform_table_cities(df_cities)
    load_data(df_cities, config, 'DB_cities')

    df_attractions = extract_data(spark, config, 'attractions')
    df_attractions = transform_table_attractions(df_attractions)
    load_data(df_attractions, config, 'DB_attractions')
    
    df_interests = extract_data(spark, config, 'interests')
    df_interests = transform_table_interests(df_interests)
    load_data(df_interests, config, 'DB_interests')

    df_jobs = extract_data(spark, config, 'jobs')
    load_data(df_jobs, config, 'DB_jobs')

    df_chat_rooms = extract_data(spark, config, 'chat_rooms')
    df_chat_rooms = transform_table_chat_rooms(df_chat_rooms)
    load_data(df_chat_rooms, config, 'DB_chat_rooms')

    df_chats = extract_data(spark, config, 'chats')
    df_chats = transform_table_chats(df_chats)
    load_data(df_chats, config, 'DB_chats')

    df_users = extract_data(spark, config, 'users')
    df_users = transform_table_users(df_users)
    load_data(df_users, config, 'DB_users')

    df_users_relationship = extract_data(spark, config, 'users_relationship')
    df_users_relationship = transform_table_users_relationship(df_users_relationship)
    load_data(df_users_relationship, config, 'DB_users_relationship')

    df_like_attractions = extract_data(spark, config, 'like_attractions')
    df_like_attractions = transform_table_like_attractions(df_like_attractions)
    load_data(df_like_attractions, config, 'DB_like_attractions')

    df_users_interests = extract_data(spark, config, 'users_interests')
    load_data(df_users_interests, config, 'DB_users_interests')

    df_posts = extract_data(spark, config, 'posts')
    df_posts = transform_table_posts(df_posts)
    load_data(df_posts, config, 'DB_posts')

    df_posts_type = extract_data(spark, config, 'posts_type')
    load_data(df_posts_type, config, 'DB_posts_type')

    df_posts_content = extract_data(spark, config, 'posts_content')
    df_posts_content = transform_table_posts_content(df_posts_content)
    load_data(df_posts_content, config, 'DB_posts_content')



if __name__ == '__main__' :
    schedule.every().day.at('06:30').do(main)

    while True:
        schedule.run_pending()
        time.sleep(1)
