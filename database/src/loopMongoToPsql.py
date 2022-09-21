import installPackage
import schedule
import time
from sparkSetting import setup_spark
from config import Config
config = Config()
spark = setup_spark(config)


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


def currencyRates_to_psql(config, df) :
    df.write.format('jdbc')\
        .option('url',"jdbc:postgresql://{}/{}".format(config.POSTGRES_DB_HOST,config.POSTGRES_DB))\
        .option('dbtable','staging_currency_rates')\
        .option('user',config.POSTGRES_USERNAME)\
        .option('password',config.POSTGRES_PASSWORD)\
        .option('driver','org.postgresql.Driver')\
        .mode('append')\
        .save()


def main() :
    df = currencyRates_from_mongodb(config, spark)
    df = transform_currencyRates(df)
    currencyRates_to_psql(config, df)


if __name__ == '__main__' :
    schedule.every().day.at('06:30').do(main())

    while True:
        schedule.run_pending()
        time.sleep(1)