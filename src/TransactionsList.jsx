import { useState, useEffect } from "react";
import Transaction from "./Transaction";
import AddTransactionForm from "./AddTransactionForm";

function TransactionList({ positions, setPositions }) {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/transactions", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setTransactions(data));
  }, []);

  return (
    <div className="container">
      <h2>Transaction History</h2>
      <table>
        <thead>
          <tr>
            <th>Action</th>
            <th>Ticker</th>
            <th>Quantity</th>
            <th>Price Per Unit</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((data) => (
            <Transaction
              key={data.id}
              action={data.action}
              ticker={data.ticker}
              quantity={data.quantity}
              price={data.price}
            />
          ))}
        </tbody>
      </table>
      <AddTransactionForm
        transactions={transactions}
        setTransactions={setTransactions}
        positions={positions}
        setPositions={setPositions}
      />
    </div>
  );
}

export default TransactionList;
