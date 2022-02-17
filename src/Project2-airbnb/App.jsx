
import "./App.css";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Card from "./components/Card";
import data from "./data";


export default function App() {

  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    );
  });

  return (
    <div className="proj2 App">
      <Navbar />
      <div className="container">
        <Main />
        <section className="cards-list">
          {cards}
        </section>
      </div>
    </div>
  );
}