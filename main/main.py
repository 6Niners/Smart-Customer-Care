from Twitter_Scrapper import Get_Scrapped_Data
from Text_Normalization import Text_Normalization
from Database_Firebase import Upload_Data

Upload_Data(Text_Normalization(Get_Scrapped_Data(), 'Tweet'))