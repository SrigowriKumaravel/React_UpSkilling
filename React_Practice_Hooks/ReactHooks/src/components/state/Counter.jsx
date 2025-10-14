import React, { useState } from "react";

//Third way using function()
export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevState) => {
      return count + 1;
    });
  };

  const handleDecrement = () => {
    setCount((prevState) => {
      return prevState - 1;
    });
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

//Second way using prevState()
// export default function Counter() {
//   const [count, setCount] = useState(0);
//   return (
//     <div className="container">
//       <h1>Counter: {count}</h1>
//       <button
//         onClick={(prevState) => {
//           setCount(prevState + 1);
//         }}
//       >
//         Increment
//       </button>
//       <button
//         onClick={(prevState) => {
//           setCount(prevState - 1);
//         }}
//       >
//         Decrement
//       </button>
//       <button
//         onClick={() => {
//           setCount(0);
//         }}
//       >
//         Reset
//       </button>
//     </div>
//   );
// }

//One way using return()
// export default function Counter() {
//   const [count, setCount] = useState(0);
//   return (
//     <div className="container">
//       <h1>Counter: {count}</h1>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Increment
//       </button>
//       <button
//         onClick={() => {
//           setCount(count - 1);
//         }}
//       >
//         Decrement
//       </button>
//       <button
//         onClick={() => {
//           setCount(0);
//         }}
//       >
//         Reset
//       </button>
//     </div>
//   );
// }
