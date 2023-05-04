import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

// styles & assets
import { faBars, faCartShopping, faXmark } from '@fortawesome/free-solid-svg-icons';
import './Nav.css';
import logo from 'assets/library-logo.png'

export default function Nav({ numBooks }) {
  function toggleMenu() {
    document.body.classList.toggle('menu--open');
  }

  return (
    <nav>
      <div className='nav__container'>
        <Link to='/'>
          <img src={logo} alt='' className='nav__logo' />
        </Link>

        <ul className='nav__list'>
          <li className='nav__list--item'>
            <Link to='/' className='nav__list--link'>
              Home
            </Link>
          </li>
          <li className='nav__list--item nav__link--primary'>
            <Link to='/books' className='nav__list--link'>
              Books
            </Link>
          </li>
          <li className='btn__menu--wrapper'>
            <button className='btn__menu' onClick={toggleMenu}>
              <FontAwesomeIcon icon={faBars} className='btn__menu--icon' />
            </button>
          </li>
          <li className='nav__icon'>
            <Link to='/cart' className='nav__list--link'>
              <FontAwesomeIcon icon={faCartShopping} className='nav__cart-icon' />
              {numBooks > 0 ? <span className='cart__length'>{numBooks}</span> : null}
            </Link>
          </li>
        </ul>

        <div className='popup'>
          <FontAwesomeIcon icon={faXmark} className='popup__x-icon' onClick={toggleMenu} />
          <ul className='popup__menu'>
            <li className='popup__menu-item'>
              <a href='#about' className='popup__menu-link' onClick={toggleMenu}>
                About
              </a>
            </li>
            <li className='popup__menu-item'>
              <a href='#books' className='popup__menu-link' onClick={toggleMenu}>
                Books
              </a>
            </li>
            <li className='popup__menu-item'>
              <Link to='/cart' className='popup__menu-link' onClick={toggleMenu}>
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
