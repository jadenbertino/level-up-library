import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

// components & hooks
import BooksGrid from '../../components/BooksGrid';
import { useBooksContext } from '../../hooks/useBooksContext';
import BookSelected from './BookSelected';

// styles
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../css/pages/BookInfo/BookInfo.css';

export default function BookInfo({ addItemToCart }) {
  const { id: currentBookID } = useParams();
  const { books } = useBooksContext();
  const [activeBook, setActiveBook] = useState(null);
  const [topFourBooks, setTopFourBooks] = useState([]);

  useEffect(() => {
    if (books.length < 1) return;
    scroll.scrollToTop({ duration: 500 });
    setActiveBook(books.find((book) => book.id === currentBookID));
    setTopFourBooks(
      books
        .filter((book) => book.rating === 5 && book.id !== currentBookID) // if they are on book info page then show only new books
        .slice(0, 4)
    );
  }, [books, currentBookID]);

  return (
    <main id='info'>
      <section className='view-all'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <Link to='/books' className='view-all__link-wrapper'>
                <FontAwesomeIcon icon={faArrowLeft} className='view-all__link' />
                <h2 className='view-all__link'>All Books</h2>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className='active'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              {activeBook && <BookSelected book={activeBook} addItemToCart={addItemToCart} />}
            </div>
          </div>
        </div>
      </section>
      <section className='recommended'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <h2 className='recommended__header'>Recommended Books</h2>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              {topFourBooks.length ? <BooksGrid books={topFourBooks} /> : null}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
