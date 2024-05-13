//import data from '../../datas/data.json'
import { Link } from "react-router-dom";
import "./card.scss";

const Card = (props) => {
  const { card } = props;
  return (
    <Link to={`/Rental/${card.id}`} className="link">
      <article className="card">
        <div className="text-align">
          <img className="card--img" src={card.cover} alt="location" />

          <p className="card--text">{card.title}</p>
        </div>
        <div className="opacity"></div>
      </article>
    </Link>
  );
};
export default Card;
