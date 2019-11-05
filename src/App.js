import React from "react";
import "./App.css";

import Footballer from "./components/useState/Footballer";
import Team from "./components/useEffect/Team";

function App() {
  return (
    <div className="App">
      <div className="use-state">
        <div className="card">
          <div class="card-content">
            <h3 class="center">I. useState</h3>
            <Footballer />
          </div>
        </div>

        <div className="card">
          <div class="card-content">
            <h3 class="center">II. useEffect</h3>
            <Team />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
