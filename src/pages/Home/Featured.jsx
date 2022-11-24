import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

export default function Featured() {
  return (
    <section id="featured">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="text--purple">Books</span>
          </h2>
          <div className="books">
            <div className="book">
              <figure className="book__img--wrapper">
                <img src={ require('assets/featured-1.png')} alt="" className="book__img" />
              </figure>
              <h3 className="book__title">Cracking The Coding Interview</h3>
              <div className="book__rating--wrapper">
                <FontAwesomeIcon icon={ faStar } className="book__rating--star"/>
                <FontAwesomeIcon icon={ faStar } className="book__rating--star"/>
                <FontAwesomeIcon icon={ faStar } className="book__rating--star"/>
                <FontAwesomeIcon icon={ faStar } className="book__rating--star"/>
                <FontAwesomeIcon icon={ faStarHalf } className="book__rating--star"/>
              </div>
              <div className="book__price">
                <span className="book__price--original">$59.95</span>
                <span className="book__price--sale">$14.95</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
