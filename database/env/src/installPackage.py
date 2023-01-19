import pip
import time

def import_install(package) :
    try :
        __import__(package)
    except :
        pip.main(['install', package])
        time.sleep(5)

import_install('playwright')
import_install('pymongo')
import_install('pyspark')
import_install('python-dotenv')
import_install('numpy')
import_install('schedule')
