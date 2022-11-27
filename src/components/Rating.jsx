import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

export default function Ratings({ rating }) {
  const stars = Math.floor(rating);

  return (
    <div className="book__rating--wrapper">
      {/* 
      -  new Array(stars) -> creates empty array, length of stars
      - .fill("") -> sets every index  equal to "", important so map works
      - map -> appends icon to array for every elem in the array, and gives it a unique key
      */}
      {new Array(stars).fill("").map((elem, index) => (
        <FontAwesomeIcon icon={faStar} key={index} />
      ))}
      {/* rating -  stars will be 0.5 if there is a half star */}
      {rating - stars !== 0 ? <FontAwesomeIcon icon={faStarHalf} /> : null}
    </div>
  );
}