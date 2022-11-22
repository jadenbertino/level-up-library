import { Link } from "react-router-dom";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons"
import './Nav.css'

export default function Nav() {
  function toggleMenu() {
    document.body.classList.toggle("menu--open")
  }

  return (
    <nav>
      <div className="nav__container">

        <Link to="/">
          <img src={ require('assets/library-logo.svg').default } alt="" className="nav__logo" />
        </Link>

        <ul className="nav__list">
          <li className="nav__list--item">
            <Link to="/" className="nav__list--link">
              Home
            </Link>
          </li>
          <li className="nav__list--item nav__link--primary">
            <Link to="/books" className="nav__list--link">
              Books
            </Link>
          </li>
          <li className="btn__menu--wrapper">
            <button className="btn__menu" onClick={ toggleMenu }>
              <FontAwesomeIcon icon={ faBars } className="btn__menu--icon" />
            </button>
          </li>
          <li className="nav__icon">
            <Link to="/cart" className="nav__list--link">
              <FontAwesomeIcon icon={ faCartShopping } className="nav__cart-icon"/>
            </Link>
          </li>
        </ul>

        <div className="popup--backdrop"></div>
        <div className="popup"></div>
      </div>
    </nav>
  )
}
