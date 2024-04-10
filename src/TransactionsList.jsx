import { useState } from "react";

function TransactionList() {
  const [transactions, setTransactions] = useState(fetchTransactions);

  function fetchTransactions() {
    fetch("http://localhost:3000/transactions", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setTransactions(data));
  }

  console.log(transactions);
  return (
    <div>
      <h2>Transaction History</h2>
      <table>
        <thead>
          <tr>
            <th>Action</th>
            <th>Ticker</th>
            <th>Amount</th>
            <th>Purchase Price</th>
            <th>Total Invested</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>BUY</td>
            <td>SPY</td>
            <td>5</td>
            <td>$716</td>
            <td>$3580</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;
