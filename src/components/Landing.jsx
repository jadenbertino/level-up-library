import React from "react";

export default function Landing() {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>America's most awarded online library platform</h1>
            <h2>Find your dream book with <span className="text--purple">Library</span></h2>
            <a href="features">
              <button className="btn">Browse Books</button>
            </a>
          </div>
          <figure className="header__img--wrapper">
            <img src={ require("assets/undraw-books.svg").default } alt="" />
          </figure>
        </div>
      </header>
    </section>
  )
}
