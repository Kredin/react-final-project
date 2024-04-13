import { useEffect, useState } from "react";

function Header({ positions, setPositions }) {
  const [totalInvested, setTotalInvested] = useState(0);
  const [totalWorth, setTotalWorth] = useState(0);
  const [profit, setProfit] = useState(0);
  const [livePrices, setLivePrices] = useState([]);

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

  useEffect(() => {
    if (livePrices.length > 1) {
      console.log(livePrices);
      setPositions(
        positions.map((position) => {
          for (let i in positions) {
            if (livePrices[i].symbol.includes(position.id)) {
              fetch(`http://localhost:3000/positions/${position.id}`, {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ currentPrice: livePrices[i].price }),
              });
              return {
                ...position,
                currentPrice: livePrices[i].price,
              };
            }
          }
        })
      );
    }
  }, [livePrices]);

  function handleClick() {
    let tickerString = "";
    for (const position of positions) {
      if (tickerString === "") {
        tickerString += position.id;
      } else {
        tickerString += `%2C${position.id}`;
      }
    }
    fetch(
      `https://real-time-finance-data.p.rapidapi.com/stock-quote?symbol=${tickerString}&language=en`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "7651fb6d83msh26bd200e933c799p1c85d6jsn8db85d0767b3",
          "X-RapidAPI-Host": "real-time-finance-data.p.rapidapi.com",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setLivePrices(data.data));
  }

  return (
    <header>
      <h1>Stock Dashboard</h1>
      <div>
        <h2>Balance Sheet</h2>
        <div id="Balance-Sheet">
          <h3>
            Total Invested: <span>${totalInvested.toFixed(2)}</span>
          </h3>
          <h3>
            Current Total Value: <span>${totalWorth.toFixed(2)}</span>
          </h3>
          <h3>
            Total Profits: <span>${profit.toFixed(2)}</span>
          </h3>
        </div>
        <button onClick={handleClick}>Update Live Prices</button>
      </div>
    </header>
  );
}

export default Header;
