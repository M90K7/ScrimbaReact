import logo from '../images/react-icon-small.png';
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <h2 className="--name">ReactFacts</h2>
      </div>
      <div className="nav-title">React Course - Project 1</div>
    </div>
  );
}