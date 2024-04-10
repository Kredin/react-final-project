import { useEffect, useState } from "react";
import WatchListItem from "./WatchListItem";

function WatchList() {
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/watchlist", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setWatchList(data));
  }, []);

  console.log(watchList);

  return (
    <div>
      <h2>Watch List</h2>
      {watchList.map((data) => (
        <WatchListItem key={data.id} ticker={data.id} />
      ))}
    </div>
  );
}
export default WatchList;
