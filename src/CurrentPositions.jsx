import Positions from "./Positions";

function CurrentPositions({ positions }) {
  return (
    <div>
      <h2>Current Positions</h2>
      <table>
        <thead>
          <tr>
            <th>Ticker</th>
            <th>Amount</th>
            <th>Purchase Price</th>
            <th>Total Invested</th>
            <th>Current Price</th>
            <th>Profit/Loss</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {positions.map((position) => (
            <Positions
              key={position.id}
              ticker={position.id}
              quantity={position.quantity}
              totalPrice={position.totalPrice}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CurrentPositions;
