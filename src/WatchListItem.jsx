function WatchListItem({ ticker, currentPrice }) {
  return (
    <h4>
      {ticker}: ${currentPrice}
    </h4>
  );
}

export default WatchListItem;
