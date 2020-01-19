import React from "react";
import CounterDocTitle from "./CounterDocTitle";
import CounterDocTitle2 from "./CounterDocTitle2";
import Counter1 from "./Counter1";
import Counter2 from "./Counter2";
import Form from "./Form";

function CustomHooks() {
  return (
    <div>
      <h5 className="center">Use Document Title</h5>
      <div className="row">
        <div className="col m6">
          <CounterDocTitle />
        </div>
        <div className="col m6">
          <CounterDocTitle2 />
        </div>
      </div>

      <h5 className="center">Use Counter</h5>
      <div className="row">
        <div className="col m6">
          <Counter1 initialValue={0} />
        </div>
        <div className="col m6">
          <Counter2 initialValue={112} />
        </div>
      </div>

      <h5 className="center">Use Input</h5>
      <div className="row">
        <div className="col m12">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default CustomHooks;
