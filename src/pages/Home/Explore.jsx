import { Link } from 'react-router-dom';
import { scrollToTop } from '../../utils/utils';

export default function Explore() {
  return (
    <section id='explore'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='explore'>
              <h2 className='section__title explore__title'>
                Explore more <span className='text--purple'>Books</span>
              </h2>
              <Link to='/books' onClick={scrollToTop}>
                <button className='explore__btn'>Explore books</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
