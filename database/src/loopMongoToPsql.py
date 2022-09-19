import installPackage
import schedule
import time
from sparkSetting import setup_spark
from config import Config
config = Config()
spark = setup_spark(config)


def currencyCode_from_mongodb(config, spark) :
    df = spark.read.format('mongo').option('spark.mongodb.input.uri','mongodb://{}/project.currencyCode'.format(config.MONGODB)).load()
    df = df.drop('_id')
    return df

def currencyRates_from_mongodb(config, spark) :
    df = spark.read.format('mongo').option('spark.mongodb.input.uri','mongodb://{}/project.currencyRates'.format(config.MONGODB)).load()
    df = df.drop('_id')
    return df


def transform_currencyRates(df) :
    import pyspark.sql.functions as F
    df = df.withColumn('year', F.year(df['date']))
    df = df.withColumn('month', F.month(df['date']))
    df = df.withColumn('day', F.dayofmonth(df['date']))
    df = df.drop('date')


def currencyCode_to_psql(config, df) :
    df.write.format('jdbc')\
        .option('url',"jdbc:postgresql://{}/{}".format(config.POSTGRES_HOST,config.POSTGRES_DB))\
        .option('dbtable','staging_currency_code')\
        .option('user',config.POSTGRES_USERNAME)\
        .option('password',config.POSTGRES_PASSWORD)\
        .option('driver','org.postgresql.Driver')\
        .mode('append')\
        .save()

def currencyRates_to_psql(config, df) :
    df.write.format('jdbc')\
        .option('url',"jdbc:postgresql://{}/{}".format(config.POSTGRES_HOST,config.POSTGRES_DB))\
        .option('dbtable','staging_currency_rates')\
        .option('user',config.POSTGRES_USERNAME)\
        .option('password',config.POSTGRES_PASSWORD)\
        .option('driver','org.postgresql.Driver')\
        .mode('append')\
        .save()

def currencyCode() :
    df = currencyCode_from_mongodb(config, spark)
    currencyCode_to_psql(config, df)

def currencyRates() :
    df = currencyRates_from_mongodb(config, spark)
    df = transform_currencyRates(df)
    currencyRates_to_psql(config, df)

currencyCode()
currencyRates()
schedule.every().day.at('06:30').do(currencyRates())

while True:
    schedule.run_pending()
    time.sleep(1)