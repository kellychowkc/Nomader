import installPackage
import requests
import numpy as np
import time
import schedule
from pymongo import MongoClient


client = MongoClient('localhost', 27017)
db = client.project

def daily_currency() :
    url='https://api.exchangerate.host/symbols'

    response = requests.get(url)
    data = response.json()
    symbols = data['symbols'].items()
    codeList = list(symbols)
    code = np.array(codeList)
    codeArr = []
    for i in range(len(code)) :
        codeArr.append(code[i][0])

    for i in range(len(codeArr)) :
        currencyURL = 'https://api.exchangerate.host/latest?base={}'.format(codeArr[i])
        response = requests.get(currencyURL)
        data = response.json()
        rates = data['rates'].items()
        ratesList = list(rates)
        rate = np.array(ratesList)
        for j in range(len(rate)) :
            currencyData = {
                'date' : data['date'],
                'code_base' : data['base'],
                'code_to' : rate[j][0],
                'rates' : rate[j][1]
            }
            db.currencyRates.insert_one(currencyData)


def main() :
    daily_currency()

if __name__ == '__main__' :
    schedule.every().day.at('06:30').do(main())

    while True:
        schedule.run_pending()
        time.sleep(1)
