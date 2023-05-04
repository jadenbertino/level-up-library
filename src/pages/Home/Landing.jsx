import { Link } from 'react-router-dom';

// styles
import landingImg from 'assets/undraw-books.svg'

export default function Landing() {
  return (
    <section id='landing'>
      <header>
        <div className='container text--center'>
          <div className='header__description'>
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
      </header>
    </section>
  );
}
