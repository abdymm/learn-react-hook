import React from "react";
import "./App.css";

import Footballer from "./components/useState/Footballer";
import Team from "./components/useEffect/Team";
import CountDownContainer from "./components/useEffect/CountDownContainer";
import RandomPeople from "./components/useReducer/RandomPeople";
import Counter from "./components/useReducer/Counter";

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
            <h3 className="center">III. useReducer</h3>
            <RandomPeople />
            <Counter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
