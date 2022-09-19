import installPackage
from config import Config
config = Config()

from sparkSetting import setup_spark

spark = setup_spark(config)


def extract_currency_code(spark, config) :
    return spark.read.format('jdbc')\
            .option("url", "jdbc:postgresql://{}/{}".format(config.POSTGRES_HOST, config.POSTGRES_DB))\
            .option("dbtable", "staging_currency_code")\
            .option("user", config.POSTGRES_USERNAME)\
            .option("password", config.POSTGRES_PASSWORD)\
            .option("driver", "org.postgresql.Driver")\
            .load()

def extract_currency_rates(spark, config) :
    return spark.read.format('jdbc')\
            .option("url", "jdbc:postgresql://{}/{}".format(config.POSTGRES_HOST, config.POSTGRES_DB))\
            .option("dbtable", "staging_currency_rates")\
            .option("user", config.POSTGRES_USERNAME)\
            .option("password", config.POSTGRES_PASSWORD)\
            .option("driver", "org.postgresql.Driver")\
            .load()

