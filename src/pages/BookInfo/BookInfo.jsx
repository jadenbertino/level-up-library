import { useBooksContext } from 'hooks/useBooksContext';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

// components
import BooksGrid from 'components/BooksGrid';
import BookSelected from './BookSelected';

// styles & assets
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'css/pages/BookInfo/BookInfo.css';

export default function BookInfo({ addItemToCart }) {
  const { id: currentBookID } = useParams();
  const { books } = useBooksContext();
  const [focusedBook, setFocusedBook] = useState(null);
  const [topFourBooks, setTopFourBooks] = useState([]);

  useEffect(() => {
    if (books.length < 1) return;
    scroll.scrollToTop({
      duration: 600,
    });
    setFocusedBook(books.find((book) => book.id === currentBookID));
    setTopFourBooks(
      books
        .filter((book) => book.rating === 5 && book.id !== currentBookID) // if they are on book info page then show only new books
        .slice(0, 4)
    );
  }, [books, currentBookID]);

  return (
    <main>
      <section id='active-book'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <Link to='/books' className='home-links'>
                <FontAwesomeIcon icon={faArrowLeft} className='home-link' />
                <h2 className='home-link'>All Books</h2>
              </Link>
              {focusedBook && <BookSelected book={focusedBook} addItemToCart={addItemToCart} />}
            </div>
          </div>
        </div>
      </section>
      <section id='recc-books'>
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
