
import "./Card.css";

export default function Card(props) {

  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="Card">
      {badgeText && <div className="Card--badge">{badgeText}</div>}
      <img className="Card--image" src={`../images/${props.coverImg}`} alt="" />
      <div className="Card--stats">
        <img src="/images/star.png" alt="star" className="Card--star" />
        <span>{props.stats.rating} </span>
        <span className="gray">({props.stats.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p><span className="bold">From ${props.price}</span> / person</p>
    </div>
  );
}