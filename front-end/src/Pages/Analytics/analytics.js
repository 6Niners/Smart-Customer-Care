import "./analytics.css"
import Aggregation_Card from "../../Components/Featured Components/Aggregation Card/aggregation_card"
import Bar_Chart from "../../Components/Featured Components/Graph Components/Bar Chart/bar_chart"



const Analytics = ({ aggCardState, weeklyAvgList }) => {


  return (
    <div id="analytics-showcase">
      <div id="aggregation-showcase">
        <div className="row">
          <div className="col-4">
            <div className="featured-item">
              <Aggregation_Card 
                  Title="Post Length" 
                  Aggregation={aggCardState[0]["aggregation"]}
                  Rating={aggCardState[0]["rating"]}
                  Update_Rate="Daily" 
              />
            </div>
          </div>

          <div className="col-4">
            <div className="featured-item">
              <Aggregation_Card 
                  Title="Post Length" 
                  Aggregation={aggCardState[1]["aggregation"]}
                  Rating={aggCardState[1]["rating"]}
                  Update_Rate="Daily" 
              />  
            </div>
          </div>

          <div className="col-4">
            <div className="featured-item">    
              <Aggregation_Card 
                  Title="Post Length" 
                  Aggregation={aggCardState[2]["aggregation"]} 
                  Rating={aggCardState[2]["rating"]} 
                  Update_Rate="Daily" 
              />
            </div>
          </div>
        </div>
      </div>

      <div id="avg-length-bar-showcase" className="featured-item">
        <div className="row">
          <div className="col-12">
            <h3 className="title-primary">Weekly Average Length</h3>
            <Bar_Chart data={weeklyAvgList}/>
          </div>
        </div>
      </div>

    </div>
  )
}



export default Analytics