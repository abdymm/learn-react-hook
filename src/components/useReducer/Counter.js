import React, { useReducer } from "react";

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

function Counter() {
  const [number, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="center">
      <h2>Number: {number}</h2>
      <div className="row">
        <div className="col m3"></div>
        <div className="col m3">
          <button className="btn btn-success" onClick={() => dispatch("inc")}>
            Increament
          </button>
        </div>
        <div className="col m3">
          <button className="btn btn-danger" onClick={() => dispatch("dec")}>
            Decreament
          </button>
        </div>
        <div className="col m3"></div>
      </div>
    </div>
  );
}

export default Counter;
