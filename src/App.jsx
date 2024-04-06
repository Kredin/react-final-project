import { useState } from "react";
import Header from "./Header";

function App() {
  // code to retrieve stock info
  // const ticker = "spy";

  // const url = `https://real-time-finance-data.p.rapidapi.com/stock-quote?symbol=${ticker}&language=en`;
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "7651fb6d83msh26bd200e933c799p1c85d6jsn8db85d0767b3",
  //     "X-RapidAPI-Host": "real-time-finance-data.p.rapidapi.com",
  //   },
  // };

  // async function fetchstocks() {
  //   const response = await fetch(url, options);
  //   const result = await response.text();
  //   console.log(result);
  // }

  // fetchstocks();

  return (
    <>
      <Header />
      <article>
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
      </article>
      <article>
        <h2>Watch List</h2>
        <h4>META: $485</h4>
        <h5>Possibly as a table</h5>
      </article>
      <article>
        <h2>Transaction History</h2>
      </article>
    </>
  );
}

export default App;
