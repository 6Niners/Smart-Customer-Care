import Sidebar from "./Components/Sidebar/sidebar"
import Topbar from "./Components/Topbar/topbar"
import Home from "./Pages/Home/home"
import Emotion from "./Pages/Emotion/emotion"
import Analytics from "./Pages/Analytics/analytics"
import Scrapper from "./Pages/Scrapper/scrapper"
import firestoreDB  from "./Api/firebase"
import axios from "axios"

import { collection, doc, Firestore, getDocs, getDoc, onSnapshot, query, where } from "firebase/firestore"
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { FirebaseError } from "firebase/app"


function App() {
 

  // States:- //
  const [sentimentScoreState, setSentimentScoreState] = useState(0)

  const [top10WordsState, setTop10WordsState] = useState([])

  const [dailyComparisonState, setDailyComparisonState] = useState(
    {
      average : 0,
      median  : 0,
      mode    : 0,
      count   : 0
    }
  )

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
      aggregation : "Count",
      rating : 0
    }
  ])



  const [oldAggregationCardState, setOldAggregationCardState] = useState([
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
      aggregation : "Count",
      rating : 0
    }
  ])



  let weeklyAvgTextLength = [
    {
      name: 'Sun',
      avgLength : 0
    },
    {
      name: 'Mon',
      avgLength : 0
    },
    {
      name: 'Tue',
      avgLength : 0
    },
    {
      name: 'Wed',
      avgLength : 0
    },
    {
      name: 'Thur',
      avgLength : 0
    },
    {
      name: 'Fri',
      avgLength : 0
    },
    {
      name: 'Sat',
      avgLength : 0
    },
  ]
  
  
  


// -----------------------------------------------------------------------------

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
        oldValue = oldObj["rating"]
        newValue = newObj["rating"]
        
        break
      }
    }
    
    let difference = Math.round(newValue - oldValue)
    
    return difference
    
  }
  
  
  
  function getTop10(tweet=[]) {
    let obj = {};                      
    let sortable = [];                                              
    
    for (let tweetIDX = 0; tweetIDX < tweet.length; tweetIDX++){   
      let wordArr = tweet[tweetIDX].split(" ")                            
      
      wordArr.forEach(function(word) {   
        if(word !== "") {

          obj[word] = obj[word] ? ++obj[word] : 1;                      
        }                             
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



  function getSentimentScore(_sentimentList) {
    let counter = 0;
    let length = 0;

    for (var sentimentIDX = 0; sentimentIDX < _sentimentList.length; sentimentIDX++){
      if (_sentimentList[sentimentIDX] == 'neutral') {
        continue
      }

      if (_sentimentList[sentimentIDX] == 'positive'){
          counter++
      }

      length++
    }

    let score = (counter / length) * 100
    return score
  } 



  async function getScrappedData(_collectionName, _documentName) {

    let scrappedDoc = doc(firestoreDB, _collectionName, _documentName)
    const scrappedDocSnap = await getDoc(scrappedDoc);

    if (scrappedDocSnap.exists()) {
      console.log("Document data:", scrappedDocSnap.data());
      return scrappedDocSnap.data()

    } else {
      console.log("Document: ", _documentName, "not found!");
      return false
    }
  }



  const updateAggregationValues = (_postTextList, setStateFunc) => {

    let avgLength = getAveragePostLength(_postTextList)
    let medianLength = getMedianPostLength(_postTextList)
    let modeLength = getModePostLength(_postTextList)
    let postsCount = _postTextList.length

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

    setStateFunc(tempState) 
  }



  const updateCardUI = (newData, oldData) => {

    let newTweetsArray = Object.values(newData.Tweet)
    let oldTweetsArray = Object.values(oldData.Tweet)
    
    updateAggregationValues(newTweetsArray, setAggregationCardState)
    updateAggregationValues(oldTweetsArray, setOldAggregationCardState)

    updateDailyComparison()
  }



  const updateTop10Values = (_data) => {
    let newTweetsArray = Object.values(_data.Tweet) 
    let top10List = getTop10(newTweetsArray)

    setTop10WordsState(top10List)    
  }



  const updateSentimentScore = (_data) => {
    let sentimentList = Object.values(_data.Sentiment)
    let sentimentScore = getSentimentScore(sentimentList)

    setSentimentScoreState(sentimentScore)    
  }
  


  const updateDailyComparison = () => {

    let avgComparison = getStateDifference("Average", oldAggregationCardState, aggregationCardState)
    let medianComparison = getStateDifference("Median", oldAggregationCardState, aggregationCardState)
    let modeComparison = getStateDifference("Mode", oldAggregationCardState, aggregationCardState)
    let countComparison = getStateDifference("Count", oldAggregationCardState, aggregationCardState)

    let tempState = {...dailyComparisonState}

    tempState.average = avgComparison
    tempState.median = medianComparison
    tempState.mode = modeComparison
    tempState.count = countComparison
    
    setDailyComparisonState(tempState)
  }



  // useEffect( async () => {
  //   var currentScrappedData = await getScrappedData("test", "2022-03-30 08:49:40.473514")
  //   var oldScrappedData = await getScrappedData("test", "2022-03-30 13:21:41.010942")

  //   try {

  //     if (currentScrappedData) {
  //       updateTop10Values(currentScrappedData)
  //       updateSentimentScore(currentScrappedData)
  //     }
  
  //     if (currentScrappedData && oldScrappedData) {
  //       updateCardUI(currentScrappedData, oldScrappedData)
  //     }
  //   }
  //   catch(err) {
  //     console.log(err)
  //   }


  // }, [])



  // useEffect(() => {
  //   updateDailyComparison()
  // }, [aggregationCardState, oldAggregationCardState])



  const addKeywordToServer = (_keyword) => {
    axios.post("http://localhost:8000/api/keyword", {keyword : _keyword})
      .then((resp) => {
        console.log(resp)
      })
  }



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
              <Route path="/scrapper" element={<Scrapper addKeywordToServer={addKeywordToServer}/>} />
              <Route path="/emotion" element={<Emotion sentimentScoreState={sentimentScoreState} />} />
              <Route path="/" element={<Analytics aggCardState={aggregationCardState}
                                                  weeklyAvgList={weeklyAvgTextLength}
                                                  top10State={top10WordsState}
                                                  dailyComparisonState={dailyComparisonState}  />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
