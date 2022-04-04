import "./emotion.css"

import SearchIcon from '@material-ui/icons/Search';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ProgressBar from "../../Components/Featured Components/Progress Bar/progress_bar";



const EmotionPage = ({CircularBar},) => {

    return (
        <div id="emotion-showcase">
            <div className="row">
                <div className="col-sm-4"> </div>
                <div className="col-sm-4">
                    <div className="featured-item d-flex flex-column align-items-center">
                        <h5 className="title-primary mb-4">Emotion Analyser</h5>
                        
                        <div id="progress-bar">
                            <ProgressBar data = {CircularBar}/>
                        </div>

                        <a class="btn btn-primary-color mt-4">Get Sentiment Score</a>
                    </div>
                </div>
                <div className="col-sm-4"> </div>
            </div>
        </div>
    )
}


export default EmotionPage