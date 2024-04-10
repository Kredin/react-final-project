function Positions({ ticker, quantity, totalPrice }) {
  return (
    <tr>
      <td>{ticker}</td>
      <td>{quantity}</td>
      <td>${totalPrice / quantity}</td>
      <td>${totalPrice}</td>
      <td>$801!</td>
      <td>$425!</td>
      <td>11.8%!</td>
    </tr>
  );
}

export default Positions;
