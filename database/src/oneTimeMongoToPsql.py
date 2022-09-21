import installPackage
from config import Config
from sparkSetting import setup_spark

config = Config()
spark = setup_spark(config)

def data_from_mongodb(config, spark, table) :
    df = spark.read.format('mongo').option('spark.mongodb.input.uri','mongodb://{}/project.{}'.format(config.MONGODB, table)).load()
    df = df.drop('_id')
    return df

def data_to_psql(config, df, table) :
    df.write.format('jdbc')\
        .option('url',"jdbc:postgresql://{}/{}".format(config.POSTGRES_DB_HOST,config.POSTGRES_DB))\
        .option('dbtable','{}'.format(table))\
        .option('user',config.POSTGRES_USERNAME)\
        .option('password',config.POSTGRES_PASSWORD)\
        .option('driver','org.postgresql.Driver')\
        .mode('append')\
        .save()

        
def main() :
    df_emergency = data_from_mongodb(config, spark, 'emergencyData')
    df_currency = data_from_mongodb(config, spark, 'currencyCode')
    df_attraction = data_from_mongodb(config, spark, 'attractionData')
    df_city = data_from_mongodb(config, spark, 'cityData')
    data_to_psql(config, df_emergency, 'staging_emergency_data')
    data_to_psql (config, df_currency, 'staging_currency_codes')
    data_to_psql(config, df_attraction, 'staging_attractions')
    data_to_psql(config, df_city, 'staging_city_data')

if __name__ == '__main__' :
    main()