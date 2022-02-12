
// Figma: https://www.figma.com/file/xA1rJVQOorqMW6xjGdBLcI/ReactFacts

import Navbar from "./components/Navbar";
import Main from "./components/Main";

import "./App.css";

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Main />
    </div>
  );
}