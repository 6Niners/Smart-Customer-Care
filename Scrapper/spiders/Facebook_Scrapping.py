from urllib import response
import scrapy
from bs4 import BeautifulSoup
import urllib.request
from urllib.parse import quote

import pandas as pd
import requests
import re

class FacebookScrappingSpider(scrapy.Spider):
    name = 'Facebook_Scrapping'
    allowed_domains = ['https://www.facebook.com/']
    start_urls = ['http://https://www.facebook.com//']

    Search_Sentence = ["vodafone"]


    def Get_link(self):
    #    Search__Bar = response.xpath("/div[@class = "k4urcfbm j83agx80 bp9cbjyn"]")


        for query in self.Search_Sentence:
            # Constracting http query
            url = 'https://www.facebook.com/search/posts/?q=' + query
            #url = url.format(quote(str(self.cid)))
            # For avoid 403-error using User-Agent
            search_response = requests.get(url)
            headers = {'Accept': 'text/html'}
            #req = requests.get(url, headers=headers)
            req = urllib.request.Request(url, headers={'User-Agent' : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36r"})
            response = urllib.request.urlopen( req )
           # html = response.read()
            #print(html)

            return response
           
    def parse(self, response):
        pass
    
        #count = 0
       # for link in response.css("")
            
            # Parsing response
            #soup = BeautifulSoup(html, 'html.parser')
            # Extracting number of results
            #resultStats = soup.find(id="resultStats").string
            #print(html)
           # print(soup)


    def comments(self,response):
        pass

scrapping = FacebookScrappingSpider()
response = scrapping.Get_link()
scrapping.parse(response)
scrapping.comments(response)