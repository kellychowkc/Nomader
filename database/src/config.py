import installPackage
from dataclasses import dataclass
import os
from dotenv import load_dotenv

load_dotenv()

@dataclass
class Config :
    AWS_ACCESS_KEY : str = os.getenv('AWS_ACCESS_KEY')
    AWS_SECRET_KEY : str = os.getenv('AWS_SECRET_KEY')
    POSTGRES_DB : str = os.getenv('POSTGRES_DB')
    POSTGRES_DW : str = os.getenv('POSTGRES_DW')
    POSTGRES_USER : str = os.getenv("POSTGRES_USER")
    POSTGRES_PASSWORD : str = os.getenv("POSTGRES_PASSWORD")
    POSTGRES_DB_HOST : str = os.getenv("POSTGRES_DB_HOST")
    POSTGRES_DW_HOST : str = os.getenv("POSTGRES_DW_HOST")
    MASTER_SPARK : str = os.getenv('MASTER_SPARK')
    MONGODB : str = os.getenv('MONGODB')

config = Config()