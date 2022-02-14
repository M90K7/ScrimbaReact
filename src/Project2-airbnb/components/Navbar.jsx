
import "./Navbar.css";

import logo from "../images/airbnb-logo.png";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <img className="--logo" src={logo} alt="airbnb logo" />
    </nav>
  );
}