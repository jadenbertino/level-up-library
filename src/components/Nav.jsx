import { Link } from 'react-router-dom';

// styles & assets
import logo from 'assets/library-logo.png';
import './Nav.css';

export default function Nav({ numBooks }) {
  function toggleMenu() {
    document.body.classList.toggle('mobile-menu-open');
  }

  return (
    <nav>
      <div className='container'>
        <Link to='/'>
          <img src={logo} alt='' className='nav__logo' />
        </Link>
        <ul className='nav__list'>
          <li className='nav__list--item'>
            <Link to='/' className='nav__list--link'>
              Home
            </Link>
          </li>
          <li className='nav__list--item'>
            <Link to='/books' className='nav__list--link primary'>
              Books
            </Link>
          </li>
          <li className='btn__menu--wrapper'>
            <button className='btn__menu' onClick={toggleMenu}>
              <i className='fa-solid fa-bars btn__menu--icon'></i>
            </button>
          </li>
          <li className='shopping-cart'>
            <Link to='/cart' className='nav__list--link'>
              <i className='fa-solid fa-cart-shopping nav__cart-icon'></i>
              {numBooks > 0 ? <span className='cart__length'>{numBooks}</span> : null}
            </Link>
          </li>
        </ul>
        <div className='mobile-menu'>
          <i className='fa-solid fa-x x-icon' onClick={toggleMenu}></i>
          <ul className='menu'>
            <li className='menu-item'>
              <i className='fa-solid fa-house'></i>
              <Link to='/' className='link' onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className='menu-item'>
              <i className='fa-solid fa-book'></i>
              <Link to='/books' className='link' onClick={toggleMenu}>
                Books
              </Link>
            </li>
            <li className='menu-item'>
              <i className='fa-solid fa-cart-shopping'></i>
              <Link to='/cart' className='link' onClick={toggleMenu}>
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
