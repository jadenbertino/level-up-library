import { useModalContext } from 'hooks/useModalContext';
import { Link } from 'react-router-dom';

// styles & assets
import logo from 'assets/library-logo.png';
import Modal from './Modal';
import './Nav.css';

export default function Nav({ numBooks }) {
  const { modalContext, setModalContext, closeModal } = useModalContext();

  function openNavModal() {
    setModalContext({
      type: 'nav',
      payload: null,
    });
  }

  return (
    <>
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
              <button className='btn__menu' onClick={openNavModal}>
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
        </div>
      </nav>
      {modalContext.type === 'nav' && (
        <Modal className={'nav-modal'}>
          <i className='fa-solid fa-x x-icon' onClick={closeModal}></i>
          <ul className='menu'>
            <li className='menu-item'>
              <i className='fa-solid fa-house'></i>
              <Link to='/' className='link' onClick={closeModal}>
                Home
              </Link>
            </li>
            <li className='menu-item'>
              <i className='fa-solid fa-book'></i>
              <Link to='/books' className='link' onClick={closeModal}>
                Books
              </Link>
            </li>
            <li className='menu-item'>
              <i className='fa-solid fa-cart-shopping'></i>
              <Link to='/cart' className='link' onClick={closeModal}>
                Cart
              </Link>
            </li>
          </ul>
        </Modal>
      )}
    </>
  );
}
