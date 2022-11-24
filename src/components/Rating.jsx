import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

export default function Ratings({ rating }) {
  const stars = Math.floor(rating);

  return (
    <div className="book__rating--wrapper">
      {new Array(stars).fill("").map((elem, index) => (
        <FontAwesomeIcon icon={faStar} key={index} />
      ))}
      {rating - stars !== 0 ? <FontAwesomeIcon icon={faStarHalf} /> : null}
    </div>
  );
}

/*
  <FontAwesomeIcon icon={ faStar } className="book__rating--star"/>
  <FontAwesomeIcon icon={ faStar } className="book__rating--star"/>
  <FontAwesomeIcon icon={ faStar } className="book__rating--star"/>
  <FontAwesomeIcon icon={ faStar } className="book__rating--star"/>
  <FontAwesomeIcon icon={ faStarHalf } className="book__rating--star"/>
*/
