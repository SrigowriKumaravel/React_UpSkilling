import React, { useState, useEffect } from "react";

function Timer() {
  const [toggle, setToggle] = useState(false);

  console.log("Timer Component is Started");

  return (
    <div>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Click Me!
      </button>
      {toggle && <DemoComponent />}
    </div>
  );
}

export default Timer;

function DemoComponent() {
  console.log("Demo Component Mounted");
  useEffect(() => {
    console.log("useEffect is Demo Component");
    const taskOne = setInterval(() => {
      console.log("Testing");
    }, 1000);

    return () => {
      clearInterval(taskOne);
      console.log("Clean up the function called and demo component demounted");
    };
  }, []);
  return <h1>I'm from Demo Component</h1>;
}
