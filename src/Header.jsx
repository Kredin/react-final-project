import { useEffect, useState } from "react";

function Header({ positions }) {
  const [totalInvested, setTotalInvested] = useState(0);
  const [totalWorth, setTotalWorth] = useState(0);
  const [profit, setProfit] = useState(0);

  useEffect(() => {
    let investTotal = 0;
    let worthTotal = 0;
    positions.forEach((e) => {
      investTotal += e.totalPrice;
      worthTotal += e.currentPrice * e.quantity;
    });
    setTotalInvested(investTotal);
    setTotalWorth(worthTotal);
    setProfit(worthTotal - investTotal);
  });

  return (
    <header>
      <h1>Stock Dashboard</h1>
      <div>
        <h2>Balance Sheet</h2>
        <h3>
          Total invested: <span>${totalInvested}</span>
        </h3>
        <h3>
          Total Worth: <span>${totalWorth}</span>
        </h3>
        <h3>
          Profits: <span>${profit}</span>
        </h3>
      </div>
    </header>
  );
}

export default Header;
