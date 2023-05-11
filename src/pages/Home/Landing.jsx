import { Link } from 'react-router-dom';

// styles
import landingImg from 'assets/undraw-books.svg';
import 'css/pages/Home/Landing.css';

export default function Landing() {
  return (
    <section id='landing'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='header__text'>
              <h1 className='header__title'>America's most awarded online library platform</h1>
              <h2 className='header__sub-title'>
                Find your dream book with <span className='text--purple'>Library</span>
              </h2>
              <Link to='/books'>
                <button className='btn'>Browse Books Now</button>
              </Link>
            </div>
            <img src={landingImg} alt='' className='header__img' />
          </div>
        </div>
      </div>
    </section>
  );
}
