import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
// import { animateScroll as scroll } from 'react-scroll';

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
  const [focusedBook, setFocusedBook] = useState(null);
  const [topFourBooks, setTopFourBooks] = useState([]);

  useEffect(() => {
    if (books.length < 1) return;
    // scroll.scrollTo("recc-books", {
    //   duration: 600,
    // });
    setFocusedBook(books.find((book) => book.id === currentBookID));
    setTopFourBooks(
      books
        .filter((book) => book.rating === 5 && book.id !== currentBookID) // if they are on book info page then show only new books
        .slice(0, 4)
    );
  }, [books, currentBookID]);

  return (
    <main id="info">
      <header>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <Link to='/books' className='header-links'>
                <FontAwesomeIcon icon={faArrowLeft} className='header-link' />
                <h2 className='header-link'>All Books</h2>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <section id='active'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              {focusedBook && <BookSelected book={focusedBook} addItemToCart={addItemToCart} />}
            </div>
          </div>
        </div>
      </section>
      <section id='recommended'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <h2 className='recc-books__header'>Recommended Books</h2>
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
