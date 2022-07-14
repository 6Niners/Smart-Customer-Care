import "./scrapper.css"
import SearchIcon from '@material-ui/icons/Search';
import { useState } from "react";


const Scrapper = ({ addKeywordToServer }) => {

  const [scrapperTitle, setScrapperTitle] = useState("")

  return (
      <div id="scrapper-showcase">
          <div className="row">
              <div className="col-sm-4"> </div>
              <div className="col-sm-4">
                <form className="featured-item">
                  <h5 className="title-primary mb-4">Scrapper</h5>

                  <div className="input-group mb-3">
                      <div className="input-group-prepend">
                          <span className="input-group-text"><SearchIcon /></span> 
                      </div>
                      <input type="text" onChange={(event) => {setScrapperTitle(event.target.value)}} placeholder="Criteria" name="Criteria" className="form-control" />
                  </div>

                  <a onClick={() => addKeywordToServer(scrapperTitle)} className="btn btn-primary-color w-100">Start Scrapping</a>
                </form>
              </div>
              <div className="col-sm-4"> </div>
          </div>
      </div>
  )
}


export default Scrapper