import installPackage
import json
import csv
from playwright.sync_api import sync_playwright


# data from 'tripadvisor'

def get_attraction_link() :
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        attractionLinkList = []
        with open('attractionLink.csv', 'a') as f : 
            try :
                for page_num in range(0, 50) :
                    if page_num == 0 :
                        string = ''
                    else :
                        string = '-oa{}'.format(30 * page_num)

                    # USA
                    page = browser.new_page()
                    page.goto('https://en.tripadvisor.com.hk/Attractions-g191-Activities{}-United_States.html'.format(string))
                    attractionList = page.evaluate('[...document.querySelectorAll(".tnGGX > a")].map(a => { return a.href })')
                    for i in range(len(attractionList)) :
                        attractionLinkList.append(attractionList[i])
                
                    # UK
                    page = browser.new_page()
                    page.goto('https://en.tripadvisor.com.hk/Attractions-g186216-Activities{}-United_Kingdom.html'.format(string))
                    attractionList = page.evaluate('[...document.querySelectorAll(".tnGGX > a")].map(a => { return a.href })')
                    for i in range(len(attractionList)) :
                        attractionLinkList.append(attractionList[i])

                    # HKG
                    page = browser.new_page()
                    page.goto('https://en.tripadvisor.com.hk/Attractions-g294217-Activities{}-Hong_Kong.html'.format(string))
                    attractionList = page.evaluate('[...document.querySelectorAll(".tnGGX > a")].map(a => { return a.href })')
                    for i in range(len(attractionList)) :
                        attractionLinkList.append(attractionList[i])
                
                attractionList = list(filter(lambda link : '#REVIEWS' not in link, attractionList))
                f.write(attractionList)

            except ValueError as error:
                print(error)
        browser.close()


def get_city_link() :
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        with open('attractionLink.csv', 'r') as f :
            attractionLink = csv.reader(f)
            for i in range(len(attractionLink)) :
                page = browser.new_page()
                page.goto(attractionLink[i])
                cityLinkList = page.evaluate('[...document.querySelectorAll(".Nm > .Cj > a")].map(city => { return city.href })')




        browser.close()


get_attraction_link()
get_city_link()
