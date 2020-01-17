import React from "react";
import useCounter from "./hooks/useCounter";

function Counter1({ initialValue }) {
  const [counter, increament, decreament, reset] = useCounter(initialValue);

  return (
    <div>
      <h4 className="center">{counter}</h4>
      <div className="row">
        <div className="col m4">
          <button
            onClick={increament}
            className="waves-effect waves-light btn btn-block"
          >
            Increament
          </button>
        </div>

        <div className="col m4">
          <button
            onClick={decreament}
            className="waves-effect waves-light btn btn-block"
          >
            Decreament
          </button>
        </div>
        <div className="col m4">
          <button
            onClick={reset}
            className="waves-effect waves-light btn btn-block"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter1;
