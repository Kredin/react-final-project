import Positions from "./Positions";

function CurrentPositions({ positions }) {
  return (
    <div className="container">
      <h2>Current Positions</h2>
      <table>
        <thead>
          <tr>
            <th>Ticker</th>
            <th>Quantity</th>
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
              currentPrice={position.currentPrice}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CurrentPositions;
