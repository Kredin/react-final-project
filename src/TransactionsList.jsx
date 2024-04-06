function TransactionList() {
  return (
    <div>
      <h2>Transaction History</h2>
      <table>
        <tr>
          <th>Ticker</th>
          <th>Amount</th>
          <th>Purchase Price</th>
          <th>Total Invested</th>
        </tr>
        <tr>
          <td>SPY</td>
          <td>5</td>
          <td>$716</td>
          <td>$3580</td>
        </tr>
      </table>
    </div>
  );
}

export default TransactionList;
