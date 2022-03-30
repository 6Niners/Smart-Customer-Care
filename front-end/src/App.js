import Sidebar from "./Components/Sidebar/sidebar"
import Topbar from "./Components/Topbar/topbar"
import Home from "./Pages/Home/home"
import Emotion from "./Pages/Emotion/emotion"
import Analytics from "./Pages/Analytics/analytics"

import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


function App() {

  // States:- //

  const [aggregationCardState, setAggregationCardState] = useState([
    {
      title : "Post Length",
      aggregation : "Average",
      rating : 0
    },

    {
      title : "Post Length",
      aggregation : "Median",
      rating : 0
    },

    {
      title : "Post Length",
      aggregation : "Mode",
      rating : 0
    },

    {
      title : "Number of Posts",
      aggregation : "Activity",
      rating : 0
    }
  ])



  const oldAggregationCardState = [
    {
      title : "Post Length",
      aggregation : "Average",
      rating : 7
    },

    {
      title : "Post Length",
      aggregation : "Median",
      rating : 2
    },

    {
      title : "Post Length",
      aggregation : "Mode",
      rating : 3
    },

    {
      title : "Number of Posts",
      aggregation : "Count",
      rating : 10
    }
  ] 



  let weeklyAvgTextLength = [
    {
      name: 'Sun',
      avgLength : 5
    },
    {
      name: 'Mon',
      avgLength : 8
    },
    {
      name: 'Tue',
      avgLength : 7
    },
    {
      name: 'Wed',
      avgLength : 3
    },
    {
      name: 'Thur',
      avgLength : 9
    },
    {
      name: 'Fri',
      avgLength : 4
    },
    {
      name: 'Sat',
      avgLength : 8
    },
  ]
  
  
  


// -----------------------------------------------------------------------------

  const sentimentTweets = ['positive','negative','negative','negative','negative','negative','negative','negative','negative','negative','negative','negative','negative','negative','negative','negative','negative','negative']

  const postTextList = ["hello there bro", "nice weather were having", "get me OUT, GET ME OUTTT!!", "extra extra read all about it bruvv, nvm im just existing"]

  const Tweets = ['wow vodaphone vodaphone vodaphone good bad good bad bad bad bad bad', 'lol vodaphone bad good good good wow vodaphone good', 'helpful helpful helpful vodaphone best best best best best best best best best best', 'vodaphone was really wow wow lol man i hated vodaphone so much because league of legends a lot more is is is is is fun']

  let top10Words = getTop10(Tweets)

  let SentimentScore = getSentimentScore(sentimentTweets)
  

  const getAveragePostLength = (_postTextList) => { 

    let totalLength = _postTextList.reduce(
      (_total, _currentValue) => _total + _currentValue.split(" ").length, 0)
    
    return Math.round(totalLength / _postTextList.length)
  }



  const getMedianPostLength = (_postTextList) => { 

    let lengthList = _postTextList.map(_text => _text.split(" ").length)
    
    return Math.round(median(lengthList))
  }



  const getModePostLength = (_postTextList) => { 

    let lengthList = _postTextList.map(_text => _text.split(" ").length)
    let modeList = mode(lengthList)

    return modeList.length != 1 ? 0 : Math.round(modeList)
  }



  function median(numbers) {
    var median = 0, numsLen = numbers.length;
    numbers.sort();
 
    if (
        numsLen % 2 === 0 // is even
    ) {
        // average of two middle numbers
        median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
    } else { // is odd
        // middle number only
        median = numbers[(numsLen - 1) / 2];
      }
      
      return median;
    }
    
    
    
    function mode(numbers) {
      var modes = [], count = [], i, number, maxIndex = 0;
      
      for (i = 0; i < numbers.length; i += 1) {
        number = numbers[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
          maxIndex = count[number];
        }
      }
      
      for (i in count)
      if (count.hasOwnProperty(i)) {
        if (count[i] === maxIndex) {
          modes.push(Number(i));
        }
      }
      
      return modes;
    }
    
    
    
    const getStateDifference = (_aggregation, _oldState, _newState) => {
      
      let oldValue = 0
      let newValue = 0
      
      for (let i = 0; i < _oldState.length; i++) {
        
        let oldObj = _oldState[i]
        let newObj = _newState[i] 
        let trueAggValue = oldObj["aggregation"]
        
        if (trueAggValue === _aggregation) {
          console.log("i made it here")
          oldValue = oldObj["rating"]
          newValue = newObj["rating"]
          
          break
        }
      }
      
      let difference = Math.round(newValue - oldValue)
      
      return  difference > 0 ? "+" + difference : difference 
      
    }
    
    
    
    function getTop10(tweet=[]) {
      let obj = {};                      
      let sortable = [];                                              
      
      for (let tweetIDX = 0; tweetIDX < tweet.length; tweetIDX++){   
        let wordArr = tweet[tweetIDX].split(" ")                            
        
        wordArr.forEach(function(word) {                                
          obj[word] = obj[word] ? ++obj[word] : 1;                      
        });
      }
      
      for (let word in obj) {
        sortable.push([word, obj[word]]);      
      }
      
      sortable.sort(function(a, b) {                                 
        return b[1]-a[1];
      });


      let Top10 = sortable.slice(0, 10);                              
      
      for(let arrIDX = 0; arrIDX < 10; arrIDX++){  

        Top10[arrIDX] = Object.assign({'word':Top10[arrIDX][0],'occurences':Top10[arrIDX][1]});
      }
      
      return Top10;
    }



    function getSentimentScore(tweet=[]) {
      let counter = 0;
      
      for (var sentimentIDX = 0; sentimentIDX < tweet.length; sentimentIDX++){
          if (tweet[sentimentIDX] == 'positive'){
              counter++
          }
      }
      return (counter / tweet.length) * 100
    } 


  
  




  const updateAggregationValues = (_postTextList) => {

    let postsCount = _postTextList.length
    let avgLength = getAveragePostLength(_postTextList)
    let medianLength = getMedianPostLength(_postTextList)
    let modeLength = getModePostLength(_postTextList)

    let tempState = [...aggregationCardState]

    let tempAvg = {...tempState[0]}
    let tempMedian = {...tempState[1]}
    let tempMode = {...tempState[2]}
    let tempCount = {...tempState[3]}

    tempAvg.rating = avgLength
    tempMedian.rating = medianLength
    tempMode.rating = modeLength
    tempCount.rating = postsCount

    tempState[0] = tempAvg
    tempState[1] = tempMedian
    tempState[2] = tempMode
    tempState[3] = tempCount

    setAggregationCardState(tempState) 
  }
  


  useEffect(() => {
    updateAggregationValues(postTextList)
    
  }, [])



  return (
    
    <Router>
      <div className="App container pt-3">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>

          <div className="col-10">
            <Topbar />

            <Routes>
              <Route path="/analytics" element={<Home />} />
              <Route path="/emotion" element={<Emotion CircularBar = {SentimentScore}/>} />
              <Route path="/" element={<Analytics aggCardState={aggregationCardState}
                                                  oldAggCardState={oldAggregationCardState}
                                                  weeklyAvgList={weeklyAvgTextLength}
                                                  top10List={top10Words}
                                                  comparisonFunc={getStateDifference}  />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
