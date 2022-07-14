import json
import firebase_admin
from datetime import datetime, timedelta
from firebase_admin import credentials
from firebase_admin import firestore



def getPastDateAndTime(daysBefore):
    pastDate = str(datetime.now() - timedelta(days = daysBefore)) 
    splitDateList = pastDate.split(" ")
    dateOnly = splitDateList[0]
    timeOnly = splitDateList[1].split(".")[0]
    #dateWithTime = dateOnly + " " + timeOnly

    return [dateOnly, timeOnly]



def getFirebaseAuth():
    CredNew = credentials.Certificate('smartcc-960f7-firebase-adminsdk-ijo0i-27aa89d85e.json')
    new = firebase_admin.initialize_app(CredNew,name="new")
    db = firestore.client(new)

    return db



def uploadDataToFirebase (collectionName, searchKeyword, df, dataLimit, auth):
    dfLength = df.shape[0]
    iterationCount = 1
    minLimit = 0
    maxLimit = None
    
    if (dfLength > dataLimit):
        iterationCount = int(dfLength / dataLimit) + 1

    for i in range(0, iterationCount):

        firebaseData = {}

        if (iterationCount == 1):
            firebaseData = json.loads(json.dumps(df[0:].to_dict()))
        else:
            if (i == (iterationCount - 1)):
                maxLimit = None
            else:
                maxLimit = dataLimit * (i + 1)
                
            minLimit = dataLimit * i 

            firebaseData = json.loads(json.dumps(df[minLimit:maxLimit].to_dict()))

        pastDate, timeOnly = getPastDateAndTime(1)
        fbAuth = auth

        uploadResponse = fbAuth.collection(collectionName).document(searchKeyword).collection(pastDate).document(timeOnly).set(firebaseData)
        
        #TODO: add exception to writing

        return uploadResponse
        

    
    
