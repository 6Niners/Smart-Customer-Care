import tweepy
import configparser
import pandas as pd
import time
import datetime 


def authentication(configfile):
    # read configs

    config = configparser.ConfigParser()
    config.read(configfile)
  
    api_key = config["twitter"]["api_key"]
    api_key_secret = config["twitter"]["api_key_secret"]

    access_token = config["twitter"]["access_token"]
    access_token_secret = config["twitter"]["access_token_secret"]

    # authentication
    auth = tweepy.OAuth2AppHandler(api_key, api_key_secret)
    api = tweepy.API(auth, wait_on_rate_limit=True)
    return api


def get_data(api, keyword):
    
    df = pd.DataFrame()
    columns = ["Tweet","Time","Location"]
    data = []
    geoc="30.033333,31.233334,920km"
    limit = 5000
    
    keywords_Hashtags = "#"+keyword
    keywords_account = "@"+keyword
    
    keywords= [keyword,keywords_Hashtags,keywords_account]
    
    for word in keywords:
        tweets = tweepy.Cursor( api.search_tweets,q=word ,count=1000, tweet_mode="extended",lang="ar",geocode=geoc).items(limit)
        
        # get all tweets text in the user home page timeline and append it in CSV file
        for tweet in tweets:
            data.append([tweet.full_text,tweet.created_at,tweet.user.location])

        #creat DataFrame
        df_temp = pd.DataFrame(data, columns=columns)
        # append df_temp in main df
        df = df.append(df_temp)
        df
    return df


def replace_New_Line(String):
    return String.replace("\n", " ")


def remove_punc(tweet_col):
    #Removing punctuations like . , ! $( ) * % @ from the text
    tweet_col = tweet_col.str.replace(r'[^\w\s]+', '')
    return tweet_col
    
def extract_date(time_col):

    df_temp = pd.DataFrame()
    days=[]
    #remove the zeros after the time and split the time column to day column
    for i in time_col:
        days.append(i.date().day)
        
    df_temp['day']=days
    
    return df_temp


def get_day():
    # using now() to get current time 
    current_time = datetime.datetime.now() 
    return current_time.day

def get_df_for_day_before(df):
    temp = df[df["day"]== get_day() - 1]
    return temp


def Get_Scrapped_Data(searchKeyword):
    api= authentication("config.ini")
    df = get_data(api, searchKeyword)
    df["Tweet"] = df["Tweet"].apply(replace_New_Line)
    df["Tweet"]= remove_punc(df['Tweet'])
    df["day"]= extract_date(df["Time"])
    df = df.drop(columns=['Time'])
    df = get_df_for_day_before(df)
    df = df.drop(columns=['day'])
    return df

