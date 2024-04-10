function Transaction({ action, ticker, quantity, price }) {
  return (
    <tr>
      <td>{action}</td>
      <td>{ticker}</td>
      <td>{quantity}</td>
      <td>${price}</td>
      <td>${quantity * price}</td>
    </tr>
  );
}
export default Transaction;
