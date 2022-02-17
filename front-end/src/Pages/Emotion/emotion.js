import "./emotion.css"
import "../../Components/FeaturedInfo/featuredInfo.css"
import { CircularProgress } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

const EmotionPage = () => {

    return (
        <div id="emotion-showcase">
            <div className="row">
                <div className="col-sm-12">
                    <div className="featuredItem">
                        <div className="card-body">
                            <h5 className="card-title mb-4">Emotion Analyser</h5>
                            
                            <div className="row">
                                <div className="col-sm-6">
                                    <div id="emotion-left">
                                        <form>
                                            <div class="input-group mb-3 w-75">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><SearchIcon /></span>
                                                    
                                                </div>
                                                <input type="text" placeholder="Criteria" name="Criteria" class="form-control" />
                                            </div>

                                            <div class="input-group mb-5 w-75">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><PeopleAltIcon /></span>
                                                    
                                                </div>
                                                <input type="text" placeholder="Groups" name="Groups" class="form-control" />
                                            </div>
                                
                                            <a class="btn btn-primary-color">Get Sentiment Score</a>
                                        </form>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div id="emotion-right">
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default EmotionPage