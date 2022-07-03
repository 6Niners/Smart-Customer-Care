from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from Twitter_Scrapper import Get_Scrapped_Data
from Text_Normalization import Text_Normalization
from Database_Firebase import uploadDataToFirebase, getFirebaseAuth

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
def post_keyword(_keyword : ScrapperKeyword):
  response = uploadDataToFirebase("Test", _keyword.keyword, Text_Normalization(Get_Scrapped_Data(_keyword.keyword), 'Tweet'), 2500, fbAuth)

  if response:
    return "Operation Successful"
  return HTTPException(404, "Operation Failed")

