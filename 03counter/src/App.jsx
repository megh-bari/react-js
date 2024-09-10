import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter <20) {
      setCounter(counter + 1)
      console.log("Added", counter)
    } else {
      alert("Counter is already at the maximum value of 20.")
    }
  };

  const removeValue = () => {
   if (counter > 0) {
    setCounter(counter - 1) 
   } else {
    alert("Counter is already at zero, cannot decrease further.");
   }
  };
  return (
    <>
      <h1>Counter</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;
