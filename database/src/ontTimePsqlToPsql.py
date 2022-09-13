import installPackage
from config import Config
config = Config()

from sparkSetting import setup_spark

def extract_data(spark, config) :
    return spark.read.format('jdbc')\
            .option("url", "jdbc:postgresql://{}/{}".format(config.POSTGRES_HOST, config.POSTGRES_DB))\
            .option("dbtable", "staging_emergency_data")\
            .option("user", config.POSTGRES_USERNAME)\
            .option("password", config.POSTGRES_PASSWORD)\
            .option("driver", "org.postgresql.Driver")\
            .load()

def load_data(df, config):
    df.write.format('jdbc')\
        .option("url", "jdbc:postgresql://{}/{}".format(config.POSTGRES_HOST, config.POSTGRES_DW))\
        .option("dbtable", "dim_emergency_data")\
        .option("user", config.POSTGRES_USERNAME)\
        .option("password", config.POSTGRES_PASSWORD)\
        .option("driver", "org.postgresql.Driver")\
        .mode('append')\
        .save()

def main() :
    spark = setup_spark(config)
    df = extract_data(spark, config)
    load_data(df, config)

if __name__ == '__main__' :
    main()