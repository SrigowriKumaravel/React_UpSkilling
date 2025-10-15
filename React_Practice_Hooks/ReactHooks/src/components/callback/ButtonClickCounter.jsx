import React, { use, useCallback, useEffect, useState } from "react";

export default function ButtonClickCounter() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState();

  // const handleClick = () => {
  //     setCount((prev) => prev + 1);
  // };

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  useEffect(() => {
    console.log("handle click function reference changed");
  }, [handleClick]);
  return (
    <div>
      <h1>useCallback Hook</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment Count</button>
      <br />
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder="Type Something"
      />
      <p>Text:{text}</p>
    </div>
  );
}
