import "./aggregation_card.css"


import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import DownwardUpwardIcon from '@material-ui/icons/ArrowDownward';


const Aggregation_Card = ({ Title, Aggregation, Rating, Comparison, Update_Rate }) => {

  let arrowType = Comparison < 0 ? <DownwardUpwardIcon className="negative-arrow" /> :
                                   <ArrowUpwardIcon className="positive-arrow"/> 

  return (
    <div id="aggregation-card">
      <div className="card-body">
          <h5 className="card-title">{Title}</h5>
          <h6 className="featured-product">{Aggregation}</h6>
          <div className="rating-container">
              <span className="rating">{Rating}</span>
              <span className="rating-comparison">{Comparison} {arrowType}</span>
          </div>
          <span className="featured-sub">Update rate is set to {Update_Rate}</span>
      </div>
    </div>
  )

}


export default Aggregation_Card