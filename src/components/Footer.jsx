import { Link } from 'react-router-dom';
import { scrollToTop } from '../utils/utils';

// styles
import logo from '../assets/library-logo.png';
import '../css/components/Footer.css'

export default function Footer() {

  return (
    <section id='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Link to='/' onClick={scrollToTop}>
              <img src={logo} alt='' className='footer__logo' />
            </Link>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <div className='footer__links'>
              <Link to='/' className='footer__link' onClick={scrollToTop}>
                Home
              </Link>
              <Link to='/books' className='footer__link'  onClick={scrollToTop}>
                Books
              </Link>
              <Link to='/cart' className='footer__link'  onClick={scrollToTop}>
                Cart
              </Link>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <p className='footer__copyright'>Copyright &copy; 2022 Library</p>
          </div>
        </div>
      </div>
    </section>
  );
}
