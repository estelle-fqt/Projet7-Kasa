import "../styles/Card.scss";
import "../datas/data.json";

function Card({ title, cover }) {
  return (
    <li className="card">
      <img src={cover} alt={title} className="card-cover"></img>
      <p className="card-title">{title}</p>
      {title}
    </li>
  );
}

export default Card;
