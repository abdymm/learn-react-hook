import React, { useState } from "react";

import CountDown from "./CountDown";

function CountDownContainer() {
  const [show, setShow] = useState(true);
  const toggleCountdown = () => {
    setShow(!show);
  };
  return (
    <div>
      {show && <CountDown />}
      <button
        className="waves-effect waves-light btn btn-block"
        onClick={toggleCountdown}
      >
        {show ? "Remove " : "Show "} Count Down
      </button>
    </div>
  );
}

export default CountDownContainer;
