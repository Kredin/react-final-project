import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="container">
      <Link exact to="/">
        Home
      </Link>
      <Link to="/Positions">Positions</Link>
      <Link to="/Transactions">Transactions</Link>
      <Link to="/All">All</Link>
    </nav>
  );
}

export default NavBar;
