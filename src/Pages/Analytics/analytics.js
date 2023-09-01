import "./analytics.css"
import Aggregation_Card from "../../Components/Featured Components/Aggregation Card/aggregation_card"
import Bar_Chart from "../../Components/Featured Components/Graph Components/Bar Chart/bar_chart"
import LineGraph from "../../Components/Featured Components/Graph Components/Line Graph/line_graph"




const Analytics = ({ aggCardState, weeklyAvgList, top10State, dailyComparisonState }) => {

  
  return (
    <div id="analytics-showcase">
      <div id="aggregation-showcase">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="featured-item">    
              <Aggregation_Card 
                  Title={aggCardState[3]["title"]} 
                  Aggregation={aggCardState[3]["aggregation"]} 
                  Rating={aggCardState[3]["rating"]}
                  comparisonValue={dailyComparisonState["count"]} 
                  Update_Rate="Daily" 
              />
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="featured-item">
              <Aggregation_Card 
                  Title={aggCardState[0]["title"]} 
                  Aggregation={aggCardState[0]["aggregation"]}
                  Rating={aggCardState[0]["rating"]}
                  comparisonValue={dailyComparisonState["average"]}
                  Update_Rate="Daily" 
              />
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="featured-item">
              <Aggregation_Card 
                  Title={aggCardState[1]["title"]} 
                  Aggregation={aggCardState[1]["aggregation"]}
                  Rating={aggCardState[1]["rating"]}
                  comparisonValue={dailyComparisonState["median"]}
                  Update_Rate="Daily" 
              />  
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="featured-item">    
              <Aggregation_Card 
                  Title={aggCardState[2]["title"]} 
                  Aggregation={aggCardState[2]["aggregation"]} 
                  Rating={aggCardState[2]["rating"]}
                  comparisonValue={dailyComparisonState["mode"]} 
                  Update_Rate="Daily" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div id="avg-length-bar-showcase" className="featured-item">
        <div className="row">
          <div className="col-12">
            <h3 className="title-primary">Weekly Average Length</h3>
            <LineGraph data={weeklyAvgList} xAxis='name' yAxis='avgLength'/>
          </div>
        </div>
      </div> */}
      
      <div id="avg-length-bar-showcase" className="featured-item">
        <div className="row">
          <div className="col-12">
            <h3 className="title-primary">Top10 Mentioned Words</h3>
            <Bar_Chart data={top10State} xAxis='word' yAxis='occurences'/>
          </div>
        </div>
      </div>


    </div>
  )
}



export default Analytics