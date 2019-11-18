import React, { useReducer } from "react";

import CounterA from "./CounterA";
import CounterB from "./CounterB";
import CounterC from "./CounterC";
import CounterAA from "./CounterAA";
import CounterAB from "./CounterAB";
import CounterBA from "./CounterBA";

export const CounterContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    default:
      return state;
  }
};

function CounterMain() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CounterContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="center">
        <h3>{count}</h3>
        <small>counter</small>
        <div className="row">
          <div className="col m4">
            <h5>Counter A</h5>
            <CounterA />
          </div>
          <div className="col m4">
            <h5>Counter B</h5>
            <CounterB />
          </div>
          <div className="col m4">
            <h5>Counter C</h5>
            <CounterC />
          </div>
        </div>
        <div className="row">
          <div className="col m4">
            <h5>Counter AA</h5>
            <CounterAA />
          </div>
          <div className="col m4">
            <h5>Counter BA</h5>
            <CounterBA />
          </div>
        </div>

        <div className="row">
          <div className="col m4">
            <h5>Counter AB</h5>
            <CounterAB />
          </div>
        </div>
      </div>
    </CounterContext.Provider>
  );
}

export default CounterMain;
