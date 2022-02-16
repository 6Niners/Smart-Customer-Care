import Topbar from "./Components/Topbar/Topbar"
import Sidebar from "./Components/Sidebar/sidebar";
import { colors } from "@material-ui/core";

function App() {
  return (
    
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col-9">
            <Topbar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
