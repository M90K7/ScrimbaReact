
import "./Main.css";

import gridImg from "../images/photo-grid.png";

export default function Main() {
  return (
    <section className="Main">
      <img className="--img" src={gridImg} alt="Grid" />
      <h1 className="title">Online Experiences</h1>
      <div className="desc">
        Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
      </div>
    </section>
  );
}