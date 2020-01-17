import React, { useState } from "react";
import useDocumentTitle from "./hooks/useDocumentTitle";

function CounterDocTitle2() {
  const [counter, setCounter] = useState(0);
  
  useDocumentTitle(counter)

  return (
    <div>
      <button
        onClick={() => setCounter(counter + 1)}
        className="waves-effect waves-light btn btn-block"
      >
        Counter - {counter}
      </button>
    </div>
  );
}

export default CounterDocTitle2;
