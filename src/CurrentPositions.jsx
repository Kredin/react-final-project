function CurrentPositions() {
  return (
    <div>
      <h2>Current Positions</h2>
      <table>
        <tr>
          <th>Ticker</th>
          <th>Amount</th>
          <th>Purchase Price</th>
          <th>Total Invested</th>
          <th>Current Price</th>
          <th>Profit/Loss</th>
          <th>Percentage</th>
        </tr>
        <tr>
          <td>SPY</td>
          <td>5</td>
          <td>$716</td>
          <td>$3580</td>
          <td>$801</td>
          <td>$425</td>
          <td>11.8%</td>
        </tr>
        <tr>
          <td>AAPL</td>
          <td>1</td>
          <td>$150</td>
          <td>$150</td>
          <td>$171</td>
          <td>$21</td>
          <td>13.1%</td>
        </tr>
      </table>
    </div>
  );
}

export default CurrentPositions;
