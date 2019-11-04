import React from "react";
import "./App.css";

import Footballer from "./components/useState/Footballer";

function App() {
  return (
    <div className="App">
      <div className="use-state">
        <h1>I. Use State</h1>
        <Footballer />
      </div>
    </div>
  );
}

export default App;
