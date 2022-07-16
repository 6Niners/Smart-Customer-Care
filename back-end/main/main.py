from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from Twitter_Scrapper import Get_Scrapped_Data
from Text_Normalization import Text_Normalization
from Database_Firebase import uploadDataToFirebase, getFirebaseAuth, uploadTopicDataToFirebase
from Topic_Modelling import trainTopicModel

# ------------------------------------------------------------------------------------

class ScrapperKeyword(BaseModel):
  keyword : str

# ------------------------------------------------------------------------------------

originsList = ["http://localhost:3000"]

apiApp = FastAPI()

apiApp.add_middleware(
  CORSMiddleware,
  allow_origins = originsList,
  allow_credentials = True,
  allow_methods = ["*"],
  allow_headers = ["*"]
)

fbAuth = getFirebaseAuth() 
dbName = "Twitter Data Before Modelling"
topicDb = "Twitter Topic Modelling"
maxCollectionLength = 2500
# ------------------------------------------------------------------------------------


# async def getDataForDay(_dbName, _keyword, _date):
#   data = await fbAuth.collection(_dbName).Document(_keyword)
#   return data



@apiApp.get("/")
def readRoot():
  return {"Connection" : "Is Working"}


# @apiApp.get("/api/tweets")
# async def getTweetDataForDay():
#   response = 2

#   if response:
#     return "Operation Successful"
#   raise HTTPException(404, "Operation Failed")


@apiApp.post("/api/keyword") 
async def post_keyword(_keyword : ScrapperKeyword):

  scrappedData = Get_Scrapped_Data(_keyword.keyword)
  normalizedText = Text_Normalization(scrappedData, 'Tweet')
  topicDataDict = trainTopicModel(normalizedText)

  response = await uploadDataToFirebase(dbName, _keyword.keyword, normalizedText, maxCollectionLength, fbAuth)

  resp2 = await uploadTopicDataToFirebase(topicDb, _keyword.keyword, topicDataDict, maxCollectionLength, fbAuth)

  if response:
    return "Operation Successful"
  return HTTPException(404, "Operation Failed")

