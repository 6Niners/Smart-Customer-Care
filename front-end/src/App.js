import Sidebar from "./Components/Sidebar/sidebar"
import Topbar from "./Components/Topbar/topbar"
import Home from "./Pages/Home/home"
import Emotion from "./Pages/Emotion/emotion"
import Analytics from "./Pages/Analytics/analytics"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


function App() {
  return (
    
    <Router>
      <div className="App container pt-3">
        <div className="row">
          <div className="col-3">
            <Sidebar />
          </div>

          <div className="col-9">
            <Topbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/emotion" element={<Emotion />} />
              <Route path="/analytics" element={<Analytics />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
