import { useState } from "react";
import Header from "./Header";
import CurrentPositions from "./CurrentPositions";
import WatchList from "./WatchList";

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
      <CurrentPositions />
      <WatchList />
      <article>
        <h2>Transaction History</h2>
      </article>
    </>
  );
}

export default App;
