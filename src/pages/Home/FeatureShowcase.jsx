import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faBookOpen, faTags } from "@fortawesome/free-solid-svg-icons";

export default function FeatureShowcase() {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="text--purple">Library</span>
          </h2>
          <div className="highlights__wrapper">
            <div className="highlight">
              <div className="highlight__icon--wrapper">
                <FontAwesomeIcon icon={faBolt} className="highlight__icon" />
              </div>
              <h3 className="highlight__title">Easy And Quick</h3>
              <p className="highlight__para">
                Get access to the book you purchased online instantly.
              </p>
            </div>
            <div className="highlight">
              <div className="highlight__icon--wrapper">
                <FontAwesomeIcon icon={faBookOpen} className="highlight__icon" />
              </div>
              <h3 className="highlight__title">10,000+ Books</h3>
              <p className="highlight__para">
                Library has books in all your favorite categories.
              </p>
            </div>
            <div className="highlight">
              <div className="highlight__icon--wrapper">
                <FontAwesomeIcon icon={faTags} className="highlight__icon" />
              </div>
              <h3 className="highlight__title">Affordable</h3>
              <p className="highlight__para">
                Get your hands on popular books for as little as $10.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
