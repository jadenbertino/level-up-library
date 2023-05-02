import { Link } from 'react-router-dom';

// styles
import './Footer.css';

export default function Footer() {
  return (
    <section id='footer'>
      <div className='container'>
        <div className='row row--center'>
          <figure className='footer__logo--wrapper'>
            <img src={require('assets/library-logo.png')} alt='' className='footer__logo' />
          </figure>
          <div className='footer__links'>
            <Link to='/' className='footer__link'>
              Home
            </Link>
            <Link to='/books' className='footer__link'>
              Books
            </Link>
            <Link to='/cart' className='footer__link no-cursor'>
              Cart
            </Link>
          </div>
          <p className='footer__copyright'>Copyright &copy; 2022 Library</p>
        </div>
      </div>
    </section>
  );
}
