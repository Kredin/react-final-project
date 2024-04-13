import React, { useState, useEffect } from "react";
// import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import CurrentPositions from "./CurrentPositions";
import WatchList from "./WatchList";
import NavBar from "./NavBar";
import TransactionList from "./TransactionsList";

function App() {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/positions", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setPositions(data));
  }, []);

  return (
    // <div>
    //   <Header positions={positions} setPositions={setPositions} />
    //   <NavBar />
    //   <Switch>
    //     <Route path="/Positions">
    //       <CurrentPositions positions={positions} />
    //     </Route>
    //     {/* <WatchList /> */}
    //     <Route path="/Transactions">
    //       <TransactionList positions={positions} setPositions={setPositions} />
    //     </Route>
    //     <Route path="*">
    //       <h1>404 Not Found</h1>
    //     </Route>
    //   </Switch>
    // </div>
    <div>
      <Header positions={positions} setPositions={setPositions} />
      <NavBar />
      <CurrentPositions positions={positions} />
      {/* <WatchList /> */}
      <TransactionList positions={positions} setPositions={setPositions} />
    </div>
  );
}

export default App;
