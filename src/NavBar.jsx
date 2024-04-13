import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/Positions">Positions</Link>
      <Link to="/Transactions">Transactions</Link>
    </nav>
  );
}

export default NavBar;
