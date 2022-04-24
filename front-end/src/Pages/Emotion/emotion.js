import "./emotion.css"
import CircularBar from "../../Components/Featured Components/Circular Bar/circular_bar";



const Emotion = ({ sentimentScoreState }) => {


    return (
        <div id="emotion-showcase">
            <div className="row">
                <div className="col-sm-4"> </div>
                <div className="col-sm-4">
                    <div className="featured-item d-flex flex-column align-items-center">
                        <h5 className="title-primary mb-4">Emotion Analyser</h5>
                        
                        <div id="progress-bar">
                            <CircularBar data={sentimentScoreState} />
                        </div>

                        <a className="btn btn-primary-color mt-4"> Get Sentiment Score</a>
                    </div>
                </div>
                <div className="col-sm-4"> </div>
            </div>
        </div>
    )
}


export default Emotion