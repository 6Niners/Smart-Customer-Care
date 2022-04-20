from Twitter_Scrapper import Get_Scrapped_Data
from Text_Normalization import Text_Normalization
from Database_Firebase import uploadDataToFirebase

keyword = "فودافون"

uploadDataToFirebase("Twitter Data Before Modelling", keyword, Text_Normalization(Get_Scrapped_Data(keyword), 'Tweet'), 2500)