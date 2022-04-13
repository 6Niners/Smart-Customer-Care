from camel_tools.utils.charsets import AR_LETTERS_CHARSET
from camel_tools.morphology.database import MorphologyDB
from camel_tools.morphology.analyzer import Analyzer
from camel_tools.tokenizers.word import simple_word_tokenize
from camel_tools.sentiment import SentimentAnalyzer
from camel_tools.disambig.mle import MLEDisambiguator
from camel_tools.tagger.default import DefaultTagger

    
class Morphological_Analysis():
    
    
    def __init__(self, DF, COL):
        self.df = DF
        self.col = COL
        

    def del_nonAR(self):
        for rows in self.df[self.col]:
            for char in rows:
                if char not in AR_LETTERS_CHARSET and char != ' ' :
                    self.df[self.col] = self.df[self.col].str.replace(char, '')
        return self.df
                    
    def get_lex(self):
        
        db = MorphologyDB.builtin_db('calima-egy-r13')
        analyzer = Analyzer(db)
        
        for rows in self.df[self.col]:
            sentence = simple_word_tokenize(rows)
            lex_sentence = ''
            for words in sentence:
                try:
                    lex_sentence += analyzer.analyze(words)[0]['root'] + ' '
                    lex_sentence = lex_sentence.replace('.', '')
                except:
                    lex_sentence += ' ' + words + ' '
            print(lex_sentence)
            self.df[self.col] = self.df[self.col].str.replace(rows, lex_sentence)
        return self.df
    
            
class Sentiment_Analysis:
    
    def __init__(self, DF, COL):
        self.df = DF
        self.col = COL
    
    def get_sentiment(self):
        sa = SentimentAnalyzer.pretrained()
        sentences = []
        for rows in self.df[self.col]:
            sentences.append(rows)
        sentiments = sa.predict(sentences)
        self.df['Sentiment'] = sentiments
        return self.df




def Text_Normalization(df, col):

    Morph = Morphological_Analysis(df, col)
    Morph.del_nonAR()

    df.fillna(value=" ", inplace=True)

    Sent = Sentiment_Analysis(df, col)
    Sent.get_sentiment() 
    
    return df