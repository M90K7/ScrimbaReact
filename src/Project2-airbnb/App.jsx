
import "./App.css";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Card from "./components/Card";

export default function App() {
  return (
    <div className="proj2 App">
      <Navbar />
      <div className="container">
        <Main />
        <Card />
      </div>
    </div>
  );
}