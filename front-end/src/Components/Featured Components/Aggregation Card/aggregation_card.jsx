import "./aggregation_card.css"

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import DownwardUpwardIcon from '@material-ui/icons/ArrowDownward';


const Aggregation_Card = ({ Title, Aggregation, Rating, comparisonValue, Update_Rate }) => {

  let comparisonSign = comparisonValue < 0 ? "-" : "+"
  let arrowType = comparisonValue < 0 ? <DownwardUpwardIcon className="negative-arrow" /> :
                                        <ArrowUpwardIcon className="positive-arrow"/>
                                   
  comparisonValue = Math.abs(comparisonValue)                                

  return (
    <div id="aggregation-card">
      <div className="card-body">
          <h5 className="card-title">{Title}</h5>
          <h6 className="featured-product">{Aggregation}</h6>
          <div className="rating-container">
              <span className="rating">{Rating}</span>
              <span className="rating-comparison"> {comparisonSign} {comparisonValue} {arrowType}</span>
          </div>
          <span className="featured-sub">Update rate is set to {Update_Rate}</span>
      </div>
    </div>
  )

}


export default Aggregation_Card