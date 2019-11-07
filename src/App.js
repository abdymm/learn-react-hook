import React from "react";
import "./App.css";

import Footballer from "./components/useState/Footballer";
import Team from "./components/useEffect/Team";
import CountDownContainer from "./components/useEffect/CountDownContainer";

function App() {

  return (
    <div className="App">
      <div className="use-state">
        <div className="card">
          <div className="card-content">
            <h3 className="center">I. useState</h3>
            <Footballer />
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h3 className="center">II. useEffect</h3>
            <Team />
            <CountDownContainer />
          </div>
        </div>
        
        <div className="card">
          <div className="card-content">
            <h3 className="center">III. Fetch Data</h3>
            
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
