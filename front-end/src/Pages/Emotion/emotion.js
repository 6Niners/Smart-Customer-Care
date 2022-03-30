import "./emotion.css"

import SearchIcon from '@material-ui/icons/Search';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ProgressBar from "../../Components/Featured Components/Progress Bar/progress_bar";



const EmotionPage = ({CircularBar},) => {

    return (
        <div id="emotion-showcase">
            <div className="row">
                <div className="col-sm-12">
                    <div className="featured-item">
                        <div className="card-body">
                            <h5 className="title-primary mb-4">Emotion Analyser</h5>

                            
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
                                    <div id="progress-bar">
                                        <ProgressBar data = {CircularBar}/>
                                       
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