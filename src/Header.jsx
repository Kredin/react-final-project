import { useEffect, useState } from "react";

function Header({ positions }) {
  const [totalInvested, setTotalInvested] = useState(0);

  useEffect(() => {
    let total = 0;
    positions.forEach((e) => (total += e.totalPrice));
    setTotalInvested(total);
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
          Total Worth: <span>$4176!</span>
        </h3>
        <h3>
          Profits: <span>$446!</span>
        </h3>
      </div>
    </header>
  );
}

export default Header;
