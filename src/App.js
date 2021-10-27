import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  // console.log(count);

  function addOne() {
    setCount(count + 1);
  }
  function subOne() {
    setCount(count - 1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={addOne}>+</button>
      <button onClick={subOne}>-</button>
    </div>
  );
}
