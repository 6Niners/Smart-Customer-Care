import numpy as np
from bertopic import BERTopic
from flair.embeddings import TransformerDocumentEmbeddings
import pandas as pd
 

def createTopics(model):
    Topics = {}

    for i in range(-1, 9):
        temp = []
        topic = model.get_topic(i)
        
        for n in topic:
            temp.append(n[0])
        
        Topics[i] = temp[:]
    
    return Topics



def trainTopicModel (df):

    arabert = TransformerDocumentEmbeddings("aubmindlab/bert-base-arabertv02-twitter")

    model = BERTopic(language="arabic", embedding_model=arabert)

    docs = list(df.loc[:, "Tweet"].values) 

    topics, probs = model.fit_transform(docs)

    topics = createTopics(model)

    return topics


