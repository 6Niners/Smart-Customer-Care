import Sidebar from "./Components/Sidebar/sidebar"
import MainBody from "./Components/MainBody/mainBody"


function App() {
  return (
    
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col-9">
            <MainBody />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
