
from facebook_scraper import get_posts_by_search
from facebook_scraper import write_post_to_disk
import pandas as pd

res = get_posts_by_search( word = "vodafone",credentials= ("abdelrahmainabbas@rocketmail.com","FAR$AWAY"), page_limit=1)

#print(tuple(res))
#print(submit_form(extra_data={res}))
#for thepost in res:
myvalues = [i['text'] for i in res if 'post_id' in i]
#temp = [x.encode('utf-8') for x in text]

#print (text)
#print (tuple(res))
#print(write_posts_to_csv(filename="file_posts.csv"))
print(write_post_to_disk(post = myvalues, location = "D:/grad proj", source = res))


df = pd.DataFrame(tuple(res))
df.to_csv('D:\grad proj\posts.csv', index=False)
print(df)