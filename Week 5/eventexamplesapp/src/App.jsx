import { useState } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function sayHello() {
    alert("Hello! Member1");
  }

  function sayWelcome(message) {
    alert(message);
  }

  function handleClick() {
    alert("I was clicked");
  }

  function increase() {
    increment();
    sayHello();
  }

  return (
    <div style={{ margin: "20px" }}>
      <h2>{count}</h2>

      <button onClick={increase}>Increment</button>

      <br />
      <br />

      <button onClick={decrement}>Decrement</button>

      <br />
      <br />

      <button onClick={() => sayWelcome("Welcome")}>
        Say Welcome
      </button>

      <br />
      <br />

      <button onClick={handleClick}>
        Click on me
      </button>

      <hr />

      <CurrencyConvertor />
    </div>
  );
}

export default App;