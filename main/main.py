from Twitter_Scrapper import Get_Scrapped_Data
from Text_Normalization import Text_Normalization
from Database_Firebase import uploadDataToFirebase

keyword = "فودافون"
scrappedData = Get_Scrapped_Data(keyword)
normalizedData = Text_Normalization(scrappedData, 'Tweet')

uploadDataToFirebase("Twitter Data Before Modelling", keyword, normalizedData, 2500)