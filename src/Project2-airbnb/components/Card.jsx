
import "./Card.css";

import card_img from "../images/katie-zaferes.png";
import star_img from "../images/star.png";

export default function Card() {
  return (
    <div className="Card">
      <img className="Card--image" src={card_img} alt="" />
      <div className="Card--stats">
        <img src={star_img} alt="star" className="Card--star" />
        <span>5.0 </span>
        <span className="gray">(6)•</span>
        <span className="gray">USA</span>
      </div>
      <p>Life Lessons with Katie Zaferes</p>
      <p><span className="bold">From $136</span> / person</p>
    </div>
  );
}