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
      aggregation : "Average",
      rating : 0
    },

    {
      aggregation : "Median",
      rating : 0
    },

    {
      aggregation : "Mode",
      rating : 0
    },
  ])


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
  ];
  


// -----------------------------------------------------------------------------


  const postTextList = ["hello there bro", "nice weather were having", "get me OUT, GET ME OUTTT!!", "extra extra read all about it bruvv, nvm im just existing"]

  var Tweets = ['wow vodaphone is bad bad bad bad bad', 'lol vodaphone is bad good good good shit good', 'league league XDXDXD vodaphone is best best best best best best best best best best best best best best best best best best best best best best best best best best best best', 'vodaphone was really shit man i hated vodaphone so much because league of legends is a lot more fun'] 

  const getAveragePostLength = (_postTextList) => { 

    let totalLength = _postTextList.reduce(
      (_total, _currentValue) => _total + _currentValue.split(" ").length, 0)
    
    return Math.round(totalLength / _postTextList.length)
  }



  const getMedianPostLength = (_postTextList) => { 

    let lengthList = _postTextList.map(_text => _text.split(" ").length)
    
    return median(lengthList)
  }



  const getModePostLength = (_postTextList) => { 

    let lengthList = _postTextList.map(_text => _text.split(" ").length)
    let modeList = mode(lengthList)

    return modeList.length != 1 ? "No Mode" : modeList
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


function count(tweet=[]) {
  var obj = {};                      

  for (var tweetIDX = 0; tweetIDX < Tweets.length; tweetIDX++){   
    let wordArr = tweet[tweetIDX].split(" ")                           

    wordArr.forEach(function(word) {                                
      obj[word] = obj[word] ? ++obj[word] : 1;             
    });
  }
  
  var sortable = [];                                              
    for (var word in obj) {
      sortable.push([word, obj[word]]);       
  }

  sortable.sort(function(a, b) {                                  
    return b[1]-a[1];
  });

  var Top10 = sortable.slice(0, 10);                              

  return Top10;
}



  const updateAggregationValues = (_postTextList) => {

    let avgLength = getAveragePostLength(_postTextList)
    let medianLength = getMedianPostLength(_postTextList)
    let modeLength = getModePostLength(_postTextList)

    let tempState = [...aggregationCardState]
    let tempAvg = {...tempState[0]}
    let tempMedian = {...tempState[1]}
    let tempMode = {...tempState[2]}

    tempAvg.rating = avgLength
    tempMedian.rating = medianLength
    tempMode.rating = modeLength

    tempState[0] = tempAvg
    tempState[1] = tempMedian
    tempState[2] = tempMode

    setAggregationCardState(tempState) 
  }
  

  


  useEffect(() => {
    updateAggregationValues(postTextList)
    console.log(count(Tweets))
  }, [])


  return (
    
    <Router>
      <div className="App container pt-3">
        <div className="row">
          <div className="col-3">
            <Sidebar />
          </div>

          <div className="col-9">
            <Topbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/emotion" element={<Emotion />} />
              <Route path="/analytics" element={<Analytics aggCardState={aggregationCardState}
                                                           weeklyAvgList={weeklyAvgTextLength}  />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
