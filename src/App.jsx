import { useState, useEffect } from "react";
import Header from "./Header";
import CurrentPositions from "./CurrentPositions";
import WatchList from "./WatchList";
import TransactionList from "./TransactionsList";

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
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/Data", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setTransactions(data.transactions));
  }, []);

  return (
    <>
      <Header />
      <CurrentPositions />
      <WatchList />
      <TransactionList transactions={transactions} />
    </>
  );
}

export default App;
