import "./featuredInfo.css"
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


const FeaturedInfo = () => {

    return (
        <div id="featured-showcase">
            <div className="row">
                <div className="col-sm-4">
                    <div className="featured-item">
                        <div className="card-body">
                            <h5 className="card-title">Average Rating</h5>
                            <h6 className="featured-product">Vodafone</h6>
                            <div className="rating-container">
                                <span className="rating">65 / 100</span>
                                <span className="rating-comparison"> +5 <ArrowUpwardIcon className="featured-icon" /> </span>
                            </div>
                            <span className="featured-sub">Compared to last month</span>
                        </div>
                    </div>
                </div>

                <div className="col-sm-4">
                    <div className="featured-item">
                        <div className="card-body">
                            <h5 className="card-title">Average Rating</h5>
                            <h6 className="featured-product">WE</h6>
                            <div className="rating-container">
                                <span className="rating">62 / 100</span>
                                <span className="rating-comparison"> +3 <ArrowUpwardIcon  className="featured-icon"/> </span>
                            </div>
                            <span className="featured-sub">Compared to last month</span>
                        </div>
                    </div>
                </div>

                <div className="col-sm-4">
                    <div className="featured-item">
                        <div className="card-body">
                            <h5 className="card-title">Average Rating</h5>
                            <h6 className="featured-product">Etisalat</h6>
                            <div className="rating-container">
                                <span className="rating">73 / 100</span>
                                <span className="rating-comparison"> -10 <ArrowDownwardIcon className="featured-icon negative" /> </span>
                            </div>
                            <span className="featured-sub">Compared to last month</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default FeaturedInfo