// styles
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Rating({ rating }) {
  const numFullStars = Math.floor(rating);
  const hasHalfStar = rating - numFullStars !== 0;
  const fullStarsArr = new Array(numFullStars).fill('');

  return (
    <div className='book__rating'>
      {fullStarsArr.map((_, i) => (
        <FontAwesomeIcon icon={faStar} key={i} />
      ))}
      {hasHalfStar && <FontAwesomeIcon icon={faStarHalf} />}
    </div>
  );
}
