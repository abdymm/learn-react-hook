import React, { useState, useEffect } from "react";

function CountDown() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const tick = () => {
    console.log("ticking", counter);
    setCounter(prevCounter => prevCounter + 1);
  };
  return (
    <h3>
      <center>{counter}</center>
    </h3>
  );
}

export default CountDown;
