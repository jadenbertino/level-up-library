import React from "react";
import { Link } from "react-router-dom";

export default function Explore() {
  return (
    <section id="explore">
      <div className="container">
        <div className="row row--center">
          <h2 className="section__title">
            Explore more <span className="text--purple">Books</span>
          </h2>
          <Link to="/books">
            <button className="btn">Explore books</button>
          </Link>
        </div>
      </div>
    </section>
  );
}