import "./aggregation_card.css"
import "../featured_style.css"
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const Aggregation_Card = ({ Title, Aggregation, Rating, Update_Rate }) => {

  return (
    <div className="featured-item">
      <div className="card-body">
          <h5 className="card-title">{Title}</h5>
          <h6 className="featured-product">{Aggregation}</h6>
          <div className="rating-container">
              <span className="rating">{Rating}</span>
              <span className="rating-comparison"> +5 <ArrowUpwardIcon className="featured-icon" /> </span>
          </div>
          <span className="featured-sub">Update rate is set to {Update_Rate}</span>
      </div>
  </div>
  )

}


export default Aggregation_Card