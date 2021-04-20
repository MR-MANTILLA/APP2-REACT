import "./index.css";
import NavBar from "./Components/NavBar/NavBar.component";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Routers from "./Routers"
import {DataProvider} from './Context/DataProvider'
function App(){
  return(
    <DataProvider>
    <div className="App">
    <Router>
      <NavBar></NavBar>
      <div className="container">
      <Routers></Routers>
      </div>
      </Router>
    </div>
    </DataProvider>
  );
}

export default App;
