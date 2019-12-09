import React from "react";
import "./App.css";

import Footballer from "./components/useState/Footballer";
import Team from "./components/useEffect/Team";
import CountDownContainer from "./components/useEffect/CountDownContainer";
import RandomPeople from "./components/useReducer/RandomPeople";
import Counter from "./components/useReducer/Counter";
import CounterMain from "./components/useReducerContext/CounterMain";

import FetchDataUseState from "./components/useState/FetchDataUseState";
import FetchDataUseReducer from "./components/useReducer/FetchDataUseReducer";

function App() {
  return (
    <div className="App">
      <div className="use-state">
        <div className="card">
          <div className="card-content">
            <h3 className="center">V. useReducer/useState fetching data</h3>
            <h4>with useState</h4>
            <FetchDataUseState />
            <hr/>
            <h4>with useReducer</h4>
            <FetchDataUseReducer />
          </div>
        </div>
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

        <div className="card">
          <div className="card-content">
            <h3 className="center">IV. useReducer with useContext</h3>
            <CounterMain />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
