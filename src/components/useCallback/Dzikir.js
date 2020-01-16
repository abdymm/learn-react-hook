import React, { useState, useCallback, useMemo } from "react";
import Counter from "./Counter";
import ButtonIncrement from "./ButtonIncrement";
import Title from "./Title";

function Dzikir() {
  const [countIstigfar, setCountIstigfar] = useState(0);
  const [countLailaha, setCountLailaha] = useState(0);

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

  const incrIstigfar = () => {
    setCountIstigfar(countIstigfar + 1);
  };

  const incrLailaha = () => {
    setCountLailaha(countLailaha + 1);
  };

  const isEven = useMemo(() => {
    console.log("countIstigfar", countIstigfar);
    return countIstigfar % 2 === 0;
  }, [countIstigfar]);

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
        <div className="row center">
          <div className="col m6">
            <h4>
              {countIstigfar} - {isEven ? "GENAP" : "GANJIL"}
            </h4>
            <button
              onClick={incrIstigfar}
              className="waves-effect waves-light btn btn-block"
            >
              Astagfirullah
            </button>
          </div>

          <div className="col m6">
            <h4>{countLailaha}</h4>
            <button
              onClick={incrLailaha}
              className="waves-effect waves-light btn btn-block"
            >
              Lailahailallah
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dzikir;
