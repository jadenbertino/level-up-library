import React from "react";

export default function Landing() {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1 className="header__title">America's most awarded online library platform</h1>
            <h2 className="header__sub-title">Find your dream book with <span className="text--purple">Library</span></h2>
            <a href="features">
              <button className="btn">Browse Books Now</button>
            </a>
          </div>
          <figure className="header__img--wrapper">
            <img src={ require("assets/undraw-books.svg").default } alt="" className="header__img" />
          </figure>
        </div>
      </header>
    </section>
  )
}
