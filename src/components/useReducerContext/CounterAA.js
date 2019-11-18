import React, { useContext } from "react";
import { CounterContext } from "./CounterMain";

function CounterAA() {
  const counterContext = useContext(CounterContext);
  return (
    <div>
      <h6>{counterContext.countState}</h6>
      <div className="row">
        <div className="col m6">
          <button
            className="btn btn-success"
            onClick={() => counterContext.countDispatch("inc")}
          >
            Increament
          </button>
        </div>
        <div className="col m6">
          <button
            className="btn btn-danger"
            onClick={() => counterContext.countDispatch("dec")}
          >
            Decreament
          </button>
        </div>
      </div>
    </div>
  );
}

export default CounterAA;