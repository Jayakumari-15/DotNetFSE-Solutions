import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function sayHello() {
    alert("Hello! Member1");
  }

  function increase() {
    increment();
    sayHello();
  }

  function sayWelcome(message) {
    alert(message);
  }

  function handlePress() {
    alert("I was clicked");
  }

  function handleSubmit(e) {
    e.preventDefault();

    const rupees = parseFloat(amount);

    if (isNaN(rupees)) {
      alert("Please enter a valid amount");
      return;
    }

    const euro = rupees / 90;

    alert(
      "Converting to Euro amount is " + euro.toFixed(2)
    );
  }

  return (
    <div className="container mt-4">

      <h2>{count}</h2>

      <button onClick={increase}>Increment</button>
      {" "}
      <button onClick={decrement}>Decrement</button>

      <br /><br />

      <button onClick={() => sayWelcome("Welcome")}>
        Say Welcome
      </button>

      {" "}

      <button onClick={handlePress}>
        Click on me
      </button>

      <hr />

      <h2 style={{ color: "green" }}>
        Currency Convertor!!!
      </h2>

      <form onSubmit={handleSubmit}>

        <label>Amount:</label>
        <br />
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <br /><br />

        <label>Currency:</label>
        <br />
        <input
          type="text"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Submit
        </button>

      </form>

    </div>
  );
}

export default App;