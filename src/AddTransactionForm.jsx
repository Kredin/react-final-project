import { useState } from "react";

function AddTransactionForm() {
  const [ticker, setTicker] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(ticker);
    console.log(quantity);
    console.log(price);
  }

  return (
    <form onSubmit={handleSubmit}>
      <select name="" id="">
        <option value="BUY">BUY</option>
        <option value="SELL">SELL</option>
      </select>
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
