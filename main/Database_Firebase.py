import json
import firebase_admin
from datetime import datetime
from firebase_admin import credentials
from firebase_admin import firestore


def Upload_Data(df):
    CredNew = credentials.Certificate('smartcc-960f7-firebase-adminsdk-ijo0i-27aa89d85e.json')
    new = firebase_admin.initialize_app(CredNew,name="new")

    db = firestore.client(new)
    #data1= json.loads(json.dumps(df[0:2500].to_dict()))
    #data2= json.loads(json.dumps(df[2500:].to_dict()))

    now = datetime.now()
    now = str(now)
    keyword= "فودافون"
    #t=df["date"].unique()[0]
    #date = t.strftime('%m/%d/%Y')
    #df = df.drop(columns=['date'])
    document_name = keyword+now
    tweets= db.collection(u'Twitter Data Before Modelling').document(document_name).set(json.loads(json.dumps(df.to_dict())))
    
    #now1 = datetime.now()
    #now1 = str(now1)
    #document_name = keyword+now1

    #tweets1= db.collection(u'Twitter Data Before Modelling').document(now1).set(data2)
    
