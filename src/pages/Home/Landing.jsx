import { Link } from 'react-router-dom';

// styles
import landingImg from '../../assets/undraw-books.svg';

export default function Landing() {
  return (
    <section id='landing'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='landing'>
              <header className='landing__header'>
                <h1 className='landing__title'>America's most awarded online library platform</h1>
                <h2 className='landing__subtitle'>
                  Find your dream book with <span className='text--purple'>Library</span>
                </h2>
                <Link to='/books'>
                  <button className='landing__btn'>Browse Books Now</button>
                </Link>
              </header>
              <img src={landingImg} alt='' className='landing__img' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
