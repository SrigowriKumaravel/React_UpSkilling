import React, { useEffect, useState } from "react";

function EffectSample() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log("Component mounted use Effect 1");
  }, []);

  useEffect(() => {
    console.log("Component mounted use Effect 2");
  }, [count2]);

  function handleIncrement1() {
    setCount1((prevState) => {
      return prevState + 1;
    });
  }

  function handleIncrement2() {
    setCount2((prevState) => {
      return prevState + 1;
    });
  }

  return (
    <div className="container">
      <h1>Counter 1:{count1}</h1>
      <button className="btn btn-primary" onClick={handleIncrement1}>
        Button 1
      </button>
      <br />
      <br />
      <h1>Counter 2:{count2}</h1>
      <button className="btn btn-primary" onClick={handleIncrement2}>
        Button 2
      </button>
    </div>
  );
}

export default EffectSample;
