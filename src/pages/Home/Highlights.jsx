import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

export default function Highlights() {
  return (
    <section id="features">
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
                <FontAwesomeIcon icon={faBolt} className="highlight__icon" />
              </div>
              <h3 className="highlight__title">Easy And Quick</h3>
              <p className="highlight__para">
                Get access to the book you purchased online instantly.
              </p>
            </div>
            <div className="highlight">
              <div className="highlight__icon--wrapper">
                <FontAwesomeIcon icon={faBolt} className="highlight__icon" />
              </div>
              <h3 className="highlight__title">Easy And Quick</h3>
              <p className="highlight__para">
                Get access to the book you purchased online instantly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
