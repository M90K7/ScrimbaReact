//import logo from './logo.svg';
import "./App.css";
// import App1 from "./project1-fact/App";
// import App2 from "./Project2-airbnb/App";
// import App3 from "./project3_meme/App";

import { NavLink, Link, Outlet } from "react-router-dom";

function App({ children, to, ...props }) {
  const activeStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "",
    };
  };
  return (
    <div className="App">
      <nav>
        <NavLink style={activeStyle} to="fact">
          Fact
        </NavLink>{" "}
        |
        <NavLink style={activeStyle} to="airbnb">
          Airbnb
        </NavLink>{" "}
        |{" "}
        <NavLink style={activeStyle} to="meme">
          Meme
        </NavLink>{" "}
        |{" "}
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
