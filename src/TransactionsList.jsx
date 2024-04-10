function TransactionList() {
  return (
    <div>
      <h2>Transaction History</h2>
      <table>
        <thead>
          <tr>
            <th>Ticker</th>
            <th>Amount</th>
            <th>Purchase Price</th>
            <th>Total Invested</th>
          </tr>
        </thead>
        <tbody>
          <tr>
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
