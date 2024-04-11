import { useState } from "react";

function AddTransactionForm({
  transactions,
  setTransactions,
  positions,
  setPositions,
}) {
  const [action, setAction] = useState("BUY");
  const [ticker, setTicker] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  function addTransaction() {
    const transaction = {
      action: action,
      ticker: ticker.toUpperCase(),
      quantity: quantity,
      price: price,
    };

    fetch("http://localhost:3000/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transaction),
    })
      .then((res) => res.json())
      .then((data) => setTransactions([...transactions, data]));
  }

  function submitBuy() {
    let alreadyExists = false;
    let previousQuantity = 0;
    let previousTotal = 0;
    for (const position of positions) {
      if (position.id === ticker.toUpperCase()) {
        alreadyExists = true;
      }
    }
    if (alreadyExists === true) {
      setPositions(
        positions.map((position) => {
          if (position.id === ticker.toUpperCase()) {
            previousQuantity = position.quantity;
            previousTotal = position.totalPrice;
            return {
              ...position,
              quantity: position.quantity + quantity,
              totalPrice: position.totalPrice + quantity * price,
            };
          } else {
            return position;
          }
        })
      );
      fetch(`http://localhost:3000/positions/${ticker.toUpperCase()}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          quantity: previousQuantity + quantity,
          totalPrice: previousTotal + quantity * price,
        }),
      });
    } else {
      const newPosition = {
        id: ticker.toUpperCase(),
        quantity: quantity,
        totalPrice: quantity * price,
        currentPrice: price,
      };
      setPositions([...positions, newPosition]);
      fetch("http://localhost:3000/positions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPosition),
      });
    }
  }

  function submitSell() {
    let moreThanOne = true;
    let previousQuantity = 0;
    let previousTotal = 0;
    for (const position of positions) {
      if (position.id === ticker.toUpperCase()) {
        const quantityFinal = position.quantity - quantity;
        console.log(quantityFinal);
        if (quantityFinal < 1) {
          moreThanOne = false;
        }
      }
    }
    if (moreThanOne === true) {
      setPositions(
        positions.map((position) => {
          if (position.id === ticker.toUpperCase()) {
            previousQuantity = position.quantity;
            previousTotal = position.totalPrice;
            return {
              ...position,
              quantity: position.quantity - quantity,
              totalPrice: position.totalPrice - quantity * price,
            };
          } else {
            return position;
          }
        })
      );
      fetch(`http://localhost:3000/positions/${ticker.toUpperCase()}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          quantity: previousQuantity - quantity,
          totalPrice: previousTotal - quantity * price,
        }),
      });
    } else {
      newPositions = positions.filter((position) => {
        position.id !== ticker.toUpperCase();
      });
      setPositions(newPositions);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    addTransaction();

    if (action === "BUY") {
      submitBuy();
    } else {
      submitSell();
    }

    setAction("BUY");
    setTicker("");
    setQuantity(0);
    setPrice(0);
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
          onChange={(e) => setQuantity(parseFloat(e.target.value))}
        />
      </label>
      <label>
        Price Per Unit: $
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
        />
      </label>
      <input type="submit" value="submit" />
    </form>
  );
}

export default AddTransactionForm;
