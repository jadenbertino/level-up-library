import { Link } from 'react-router-dom';

// hooks
import { useModalContext } from '../hooks/useModalContext';

// components
import Modal from './Modal';

// styles
import logo from '../assets/library-logo.png';
import '../css/components/Nav.css';
import '../css/components/NavModal.css'

export default function Nav({ numBooks }) {
  const { modalContext, fadeInModal, fadeOutModal } = useModalContext();

  function openNavModal() {
    fadeInModal({
      type: 'nav',
      payload: null,
    });
  }

  return (
    <>
      <nav>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='nav'>
                <Link className='nav__link' to='/'>
                  <img src={logo} alt='' className='nav__logo' />
                </Link>
                <ul className='nav__links'>
                  <li className='nav__link-wrapper'>
                    <Link className='nav__link' to='/'>
                      Home
                    </Link>
                  </li>
                  <li className='nav__link-wrapper'>
                    <Link className='nav__link nav__link--primary' to='/books'>
                      Books
                    </Link>
                  </li>
                  <li className='nav__link-wrapper nav__hamburger-icon' onClick={openNavModal}>
                    <button className='hamburger'>
                      <i className='fa-solid fa-bars'></i>
                    </button>
                  </li>
                  <li className='nav__link-wrapper nav__cart-icon'>
                    <Link className='nav__link' to='/cart'>
                      <i className='fa-solid fa-cart-shopping'></i>
                      {numBooks > 0 ? <span className='cart-size-bubble'>{numBooks}</span> : null}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      {modalContext.type === 'nav' && (
        <Modal className={'nav-modal'}>
          <ul className='nav-modal__links'>
            <li className='nav-modal__x-icon'>
              <i className='fa-solid fa-x' onClick={fadeOutModal}></i>
            </li>
            <li>
              <Link className='nav-modal__link' to='/' onClick={fadeOutModal}>
                <i className='nav-modal__link-icon fa-solid fa-house'></i>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link className='nav-modal__link' to='/books' onClick={fadeOutModal}>
                <i className='nav-modal__link-icon fa-solid fa-book'></i>
                <span>Books</span>
              </Link>
            </li>
            <li>
              <Link className='nav-modal__link' to='/cart' onClick={fadeOutModal}>
                <i className='nav-modal__link-icon fa-solid fa-cart-shopping'></i>
                <span>Cart</span>
              </Link>
            </li>
          </ul>
        </Modal>
      )}
    </>
  );
}
