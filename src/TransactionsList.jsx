import Transaction from "./Transaction";

function TransactionList({ transactions }) {
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
    </div>
  );
}

export default TransactionList;
