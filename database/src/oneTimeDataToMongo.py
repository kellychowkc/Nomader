import installPackage
import requests
import numpy as np
import time
from pymongo import MongoClient
from playwright.sync_api import sync_playwright

client = MongoClient('localhost', 27017)
db = client.project


with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    
    # data from 'adducation.info'
    pageOne = browser.new_page()
    pageOne.goto('https://www.adducation.info/general-knowledge-travel-and-transport/emergency-numbers/')

    dataFromAdducationInfo = pageOne.evaluate('[...document.querySelectorAll("tbody > tr")].map(tr => { return tr.innerText })')

    for i in range(len(dataFromAdducationInfo)) :
        eachRecordInData = dataFromAdducationInfo[i].split('\t')
        country = eachRecordInData[0]
        countryName = country[3:].replace('&', 'and')

        emergency = ', '.join([str(int(word) for word in eachRecordInData[1].split() if word.isdigit())])
        police = ', '.join([str(int(word) for word in eachRecordInData[2].split() if word.isdigit())])
        ambulance = ', '.join([str(int(word) for word in eachRecordInData[3].split() if word.isdigit())])
        fire = ', '.join([(int(word) for word in eachRecordInData[4].split() if word.isdigit())])
        callingCode = eachRecordInData[6]
        if ',' in callingCode : 
            callingCode = callingCode.replace(',', ', ')
        elif '/' in callingCode :
            callingCode = callingCode.replace(' / ', ', ')
        elif '\n' in callingCode :
            callingCode = callingCode.replace('\n', ', ')

        record = {
            'country_name' : countryName,
            'emergency_tel' : emergency,
            'police_tel' : police,
            'ambulance_tel' : ambulance,
            'fire_tel' : fire,
            'location_group' : eachRecordInData[5],
            'calling_code' : callingCode,
            'info' : eachRecordInData[7]
        }
        db.emergencyData.insert_one(record)
    

    #  data from 'exchangerate.host'
    urlOne='https://api.exchangerate.host/symbols'
    
    response = requests.get(urlOne)
    data = response.json()
    symbols = data['symbols'].items()
    codeList = list(symbols)
    code = np.array(codeList)
    codeArr = []
    for i in range(len(code)) :
        record = {
            'code' : code[i][1]['code'],
            'currency_name' : code[i][1]['description']
        }
        codeArr.append(record)
    
    # data from 'worlddata.info'
    pageTwo = browser.new_page()
    pageTwo.goto('https://www.worlddata.info/currencies/')
    dataFromWorlddata = pageTwo.evaluate('[...document.querySelectorAll("tbody > tr")].map(tr => { return tr.innerText })')

    countryArr = []
    for i in range(len(dataFromWorlddata)) :
        data = dataFromWorlddata[i].split('\t')
        countryList = data[2].split(', ')
        for i in range(len(countryList)) :
            record = {
                'code' : data[0],
                'using_country' : countryList[i]
            }
            countryArr.append(record)

    # combine currency code and country
    for i in range(len(codeArr)) :
        code = codeArr[i]['code']
        for j in range(len(countryArr)) :
            if code == countryArr[j]['code'] :
                codeArr[i].update({'using_country' : countryArr[j]['using_country']})
    for i in range(len(codeArr)) :
        db.currencyCodeCountry.insert_one(codeArr[i])

    
    # data from 'tripadvisor'
    attractionList = []
    # USA
    pageThree = browser.new_page()
    for page_num in range(0, 50) :
        if page_num == 0 :
            string = ''
        else :
            string = '-oa{}'.format(30 * page_num)

        pageThree.goto('https://en.tripadvisor.com.hk/Attractions-g191-Activities{}-United_States.html'.format(string))
        attractionListOfUSA = pageThree.evaluate('[...document.querySelectorAll(".tnGGX > a")].map(a => { return a.href })')
        for i in range(len(attractionListOfUSA)) :
            attractionList.append(attractionListOfUSA[i])

    # UK
    pageFour = browser.new_page()
    for page_num in range(0, 50) :
        if page_num == 0 :
            string = ''
        else :
            string = '-oa{}'.format(30 * page_num)
        
        pageFour.goto('https://en.tripadvisor.com.hk/Attractions-g186216-Activities{}-United_Kingdom.html'.format(string))
        attractionListOfUK = pageFour.evaluate('[...document.querySelectorAll(".tnGGX > a")].map(a => { return a.href })')
        for i in range(len(attractionListOfUK)) :
            attractionList.append(attractionListOfUK[i])
    
    # HKG
    pageFive = browser.new_page()
    for page_num in range(0, 50) :
        if page_num == 0 :
            string = ''
        else :
            string = '-oa{}'.format(30 * page_num)
        
        pageFive.goto('https://en.tripadvisor.com.hk/Attractions-g294217-Activities{}-Hong_Kong.html'.format(string))
        attractionListOfHKG = pageFive.evaluate('[...document.querySelectorAll(".tnGGX > a")].map(a => { return a.href })')
        for i in range(len(attractionListOfHKG)) :
            attractionList.append(attractionListOfHKG[i])
    
    attractionList = list(filter(lambda link : '#REVIEWS' not in link, attractionList))
    print(attractionList)


    def get_attraction_data(attractionList) :
        linkArr = []
        for i in range(len(attractionList)) :
            page = browser.new_page()
            page.goto(attractionList[i])
            attractionTitle = page.evaluate('[document.querySelector(".nrbon > h1")].map(h => { return h.innerText })')
            attractionTime = page.evaluate('[...document.querySelectorAll(".EIVzV > .pZUbB > span")].map(time => { return time.innerText })')
            attractionDescription = page.evaluate('[document.querySelector(".FKffI > .bgMZj > .KxBGd")].map(about => { return about.innerText })')
            attractionImg = page.evaluate('[document.querySelector("li > .Kxegy")].map(img => { return img.style.backgroundImage })')
            attractionLocation = page.evaluate('[...document.querySelectorAll(".MJ > button > .Wb")].map(local => { return local.innerText })')
            attractionCity = page.evaluate('[...document.querySelectorAll(".Nm > .Cj > a")].map(city => { return city.innerText })')
            cityLinkList = page.evaluate('[...document.querySelectorAll(".Nm > .Cj > a")].map(city => { return city.href })')
            attractionLink = page.evaluate('[...document.querySelectorAll(".raEkE")].map(a => { return a.href })')
            attractionType = page.evaluate('[...document.querySelectorAll(".KxBGd > .FKffI > .bgMZj")].map(type => { return type.innerText })')
            
            if len(attractionTime) == 0 :
                openTime = ''
            else :
                openTime = attractionTime[0]

            if len(attractionLocation) == 0 :
                location = ''
            else :
                location = attractionLocation[0]
            
            cityArrList = []
            for i in range(len(attractionCity)) :
                if i == 0 :
                    country = attractionCity[i]
                elif i == len(attractionCity) - 1 :
                    pass
                else :
                    cityArrList.append(attractionCity[i])
            cityList = ', '.join(cityArrList)

            tel = ''
            website = ''
            for i in range(len(attractionLink)) :
                data = str(attractionLink[i])
                if 'tel' in data :
                    tel = data
                elif 'http://' in data :
                    website = data
                else : 
                    pass

            for i in range(len(cityLinkList)) :
                link = cityLinkList[i]
                if link in linkArr :
                    pass
                elif i == 0 | i == len(cityLinkList) - 1 :
                    pass
                else :
                    linkArr.append({'country' : country , 'link' : link})
                
            time.sleep(15)

            attraction = {
                'name' : attractionTitle[0],
                'description' : attractionDescription[0],
                'image' : attractionImg[0],
                'tel_num' : tel,
                'address' : location,
                'city' : cityList,
                'country' : country,
                'open_time' : openTime,
                'website' : website,
                'type' : attractionType[0]
            }

            print(attraction)
            # db.attractionData.insert_one(attraction)

        return linkArr


    def get_city_data(linkArr) :
        for i in range(len(linkArr)) :
            pageCity = browser.new_page()
            pageCity.goto(linkArr[i]['link'])
            cityName = pageCity.evaluate('[...document.querySelectorAll("h1 > span > span")].map(city => { return city.innerText })')
            cityDescription = pageCity.evaluate('[...document.querySelectorAll(".SSPMW > .GYFPJ")].map(city => { return city.innerText })')
            cityImg = pageCity.evaluate('[...document.querySelectorAll(".Gm > button > picture > img")].map(img => { return img.src })')

            if len(cityDescription) == 0 :
                description = ''
            else :
                description = cityDescription[0]
            
            if len(cityImg)== 0 : 
                image = ''
            else :
                image = cityImg[0]
            
            time.sleep(15)

            city = {
                'name' : cityName[1],
                'description' : description,
                'image' : image,
                'country' : linkArr[i]['country']
            }

            print(city)
            # db.cityData.insert_one(city)


    def main(list) :
        linkArr = get_attraction_data(list)
        get_city_data(linkArr)
    
    if __name__ == '__main__' :
        main(attractionList)

    browser.close()
