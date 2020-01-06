import React, { useState, useCallback } from "react";
import Counter from "./Counter";
import ButtonIncrement from "./ButtonIncrement";
import Title from "./Title";

function Dzikir() {
  const [countSub, setCountSub] = useState(0);
  const [countAlh, setCountAlh] = useState(0);
  const [countAll, setCountAll] = useState(0);

  const incrSub = useCallback(() => {
    setCountSub(countSub + 1);
  }, [countSub]);
  const incrAlh = useCallback(() => {
    setCountAlh(countAlh + 1);
  }, [countAlh]);
  const incrAll = useCallback(() => {
    setCountAll(countAll + 1);
  }, [countAll]);

  return (
    <div>
      <Title />
      <div className="row center">
        <div className="col m4">
          <Counter count={countSub}>SUBHANALLAH</Counter>
          <ButtonIncrement onClick={incrSub}>Dzikir SUB</ButtonIncrement>
        </div>
        <div className="col m4">
          <Counter count={countAlh}>ALHAMDULILLAH</Counter>
          <ButtonIncrement onClick={incrAlh}>Dzikir ALH</ButtonIncrement>
        </div>
        <div className="col m4">
          <Counter count={countAll}>ALLAHUAKBAR</Counter>
          <ButtonIncrement onClick={incrAll}>Dzikir ALL</ButtonIncrement>
        </div>
      </div>
    </div>
  );
}

export default Dzikir;
