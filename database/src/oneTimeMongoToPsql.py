import installPackage
from config import Config
from sparkSetting import setup_spark

config = Config()
spark = setup_spark(config)

def emergencyData_from_mongodb(config, spark) :
    df = spark.read.format('mongo').option('spark.mongodb.input.uri','mongodb://{}/project.emergencyData'.format(config.MONGODB)).load()
    df = df.drop('_id')
    return df

def currencyCodeCountry_from_mongodb(config, spark) :
    df = spark.read.format('mongo').option('spark.mongodb.input.uri','mongodb://{}/project.currencyCodeCountry'.format(config.MONGODB)).load()
    df = df.drop('_id')
    return df

def attractionData_from_mongodb(config, spark) :
    df = spark.read.format('mongo').option('spark.mongodb.input.uri','mongodb://{}/project.attractionData'.format(config.MONGODB)).load()
    df = df.drop('_id')
    return df

def cityData_from_mongodb(config, spark) :
    df = spark.read.format('mongo').option('spark.mongodb.input.uri','mongodb://{}/project.cityData'.format(config.MONGODB)).load()
    df = df.drop('_id')
    return df

def emergencyData_to_psql(config, df) :
    df.write.format('jdbc')\
        .option('url',"jdbc:postgresql://{}/{}".format(config.POSTGRES_HOST,config.POSTGRES_DB))\
        .option('dbtable','staging_emergency_datas')\
        .option('user',config.POSTGRES_USERNAME)\
        .option('password',config.POSTGRES_PASSWORD)\
        .option('driver','org.postgresql.Driver')\
        .mode('append')\
        .save()

def currencyCodeCountry_to_psql(config, df) :
    df.write.format('jdbc')\
        .option('url',"jdbc:postgresql://{}/{}".format(config.POSTGRES_HOST,config.POSTGRES_DB))\
        .option('dbtable','staging_currency_codes_countries')\
        .option('user',config.POSTGRES_USERNAME)\
        .option('password',config.POSTGRES_PASSWORD)\
        .option('driver','org.postgresql.Driver')\
        .mode('append')\
        .save()

def attractionData_to_psql(config, df) :
    df.write.format('jdbc')\
        .option('url',"jdbc:postgresql://{}/{}".format(config.POSTGRES_HOST,config.POSTGRES_DB))\
        .option('dbtable','staging_attractions')\
        .option('user',config.POSTGRES_USERNAME)\
        .option('password',config.POSTGRES_PASSWORD)\
        .option('driver','org.postgresql.Driver')\
        .mode('append')\
        .save()

def cityData_to_psql(config, df) :
    df.write.format('jdbc')\
        .option('url',"jdbc:postgresql://{}/{}".format(config.POSTGRES_HOST,config.POSTGRES_DB))\
        .option('dbtable','staging_city_datas')\
        .option('user',config.POSTGRES_USERNAME)\
        .option('password',config.POSTGRES_PASSWORD)\
        .option('driver','org.postgresql.Driver')\
        .mode('append')\
        .save()
        
def main() :
    df_emergency = emergencyData_from_mongodb(config, spark)
    df_currency = currencyCodeCountry_from_mongodb(config, spark)
    df_attraction = attractionData_from_mongodb(config, spark)
    df_city = cityData_from_mongodb(config, spark)
    emergencyData_to_psql(config, df_emergency)
    currencyCodeCountry_to_psql (config, df_currency)
    attractionData_to_psql(config, df_attraction)
    cityData_to_psql(config, df_city)

if __name__ == '__main__' :
    main()