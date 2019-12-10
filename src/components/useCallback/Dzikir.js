import React, { useState } from "react";
import Counter from "./Counter";
import ButtonIncrement from "./ButtonIncrement";

function Dzikir() {
  const [countSub, setCountSub] = useState(0);
  const [countAlh, setCountAlh] = useState(0);
  const [countAll, setCountAll] = useState(0);

  const incremeantDzikir = type => {
    switch (type) {
      case "SUB":
        setCountSub(countSub + 1);
        break;
      case "ALH":
        setCountAlh(countAlh + 1);
        break;
      case "ALL":
        setCountAll(countAll + 1);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h4>Dzikir</h4>
      <div className="row center">
        <div className="col m4">
          <Counter count={countSub}>SUBHANALLAH</Counter>
          <ButtonIncrement onClick={() => incremeantDzikir("SUB")}>
            Dzikir SUB
          </ButtonIncrement>
        </div>
        <div className="col m4">
          <Counter count={countAlh}>ALHAMDULILLAH</Counter>
          <ButtonIncrement onClick={() => incremeantDzikir("ALH")}>
            Dzikir ALH
          </ButtonIncrement>
        </div>
        <div className="col m4">
          <Counter count={countAll}>ALLAHUAKBAR</Counter>
          <ButtonIncrement onClick={() => incremeantDzikir("ALL")}>
            Dzikir ALL
          </ButtonIncrement>
        </div>
      </div>
    </div>
  );
}

export default Dzikir;
