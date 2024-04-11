import { useState } from "react";

function AddTransactionForm({ transactions, setTransactions }) {
  const [action, setAction] = useState("BUY");
  const [ticker, setTicker] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    const transaction = {
      action: action,
      ticker: ticker,
      quantity: quantity,
      price: price,
    };

    fetch("http://localhost:3000/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transaction),
    });
    console.log(transactions);
    setTransactions([...transactions, transaction]);
    console.log(transactions);
    // setAction("BUY");
    // setTicker("");
    // setQuantity(0);
    // setPrice(0);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Action:
        <select value={action} onChange={(e) => setAction(e.target.value)}>
          <option value="BUY">BUY</option>
          <option value="SELL">SELL</option>
        </select>
      </label>
      <label>
        Ticker:
        <input
          type="text"
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
        />
      </label>
      <label>
        Quantity:
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </label>
      <label>
        Purchase Price: $
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <input type="submit" value="submit" />
    </form>
  );
}

export default AddTransactionForm;
