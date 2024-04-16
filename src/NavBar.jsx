import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="container">
      <Link exact to="/react-final-project/">
        Home
      </Link>
      <Link to="/react-final-project/Positions">Positions</Link>
      <Link to="/react-final-project/Transactions">Transactions</Link>
      <Link to="/react-final-project/All">All</Link>
    </nav>
  );
}

export default NavBar;
