import installPackage
import requests
import numpy as np
import time
import schedule
from pymongo import MongoClient

client = MongoClient('localhost', 27017)
db = client.project

url='https://api.exchangerate.host/symbols'

response = requests.get(url)
data = response.json()
symbols = data['symbols'].items()
codeList = list(symbols)
code = np.array(codeList)
codeArr = []
for i in range(len(code)) :
    record = {
        'code' : code[i][1]['code'],
        'name' : code[i][1]['description']
    }
    db.currencyCode.insert_one(record)
    codeArr.append(code[i][0])


def daily_currency(codeArr) :
    for i in range(len(codeArr)) :
        currencyURL = 'https://api.exchangerate.host/latest?base={}'.format(codeArr[i])
        response = requests.get(currencyURL)
        data = response.json()
        rates = data['rates'].items()
        ratesList = list(rates)
        rate = np.array(ratesList)
        currencyData = {
            'date' : data['date'],
            'base' : data['base'],
            'rates' : rate
        }
        print(currencyData)
        db.currencyRates.insert_one(currencyData)

daily_currency(codeArr)
schedule.every().day.at('06:00').do(daily_currency(codeArr))

while True:
    schedule.run_pending()
    time.sleep(1)