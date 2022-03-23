var Tweets = ['wow vodaphone is bad bad bad bad bad', 'lol vodaphone is bad good good good shit good', 'league league XDXDXD vodaphone is best best best best best best best best best best best best best best best best best best best best best best best best best best best best', 'vodaphone was really shit man i hated vodaphone so much because league of legends is a lot more fun'] 

function count(tweet=[]) {
    var obj = {};                      //Object to store each word as a property with number of occurences as its value

    for (var tweetIDX = 0; tweetIDX < Tweets.length; tweetIDX++){   //iterate through array of tweets
    wordArr = tweet[tweetIDX].split(" ")                            //Split each tweet to invdividual words
 
    wordArr.forEach(function(word) {                                //store each word as object property
      obj[word] = obj[word] ? ++obj[word] : 1;                      //if same word is met again increment property value by 1
    });
    }
    
    var sortable = [];                                              //objects are not sortable so we need to turn obj into array
    for (var word in obj) {
    sortable.push([word, obj[word]]);       //sortable is array of arrays each consisting of 1 object property(word) and its value
    }

    sortable.sort(function(a, b) {                                  //sort sortable array in descending order
    return b[1]-a[1];
    });
    var Top10 = sortable.slice(0, 10);                              //get top N used words in tweets

  
    return Top10;
  
}
  

console.log(count(Tweets))