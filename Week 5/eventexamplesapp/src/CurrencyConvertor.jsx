import { useState } from "react";

function CurrencyConvertor() {
  const [rupees, setRupees] = useState("");
  const [euro, setEuro] = useState("");

  function handleSubmit() {
    const result = (rupees / 90).toFixed(2);
    setEuro(result);
    alert("Euro = " + result);
  }

  return (
    <div>
      <h1 style={{ color: "green" }}>Currency Convertor!!!</h1>

      <p>
        Amount:
        <input
          type="number"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
        />
      </p>

      <p>
        Currency:
        <input type="text" value={euro} readOnly />
      </p>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default CurrencyConvertor;