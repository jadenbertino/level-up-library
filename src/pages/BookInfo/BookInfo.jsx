import { useCollection } from 'hooks/useCollection';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

// components
import BookSelected from './BookSelected';

// styles & assets
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './BookInfo.css';

export default function BookInfo({ addItemToCart }) {
  const { id: currentBookID } = useParams();
  const { docs: books } = useCollection('books');
  const [book, setBook] = useState(null);

  useEffect(() => {
    if (!books) return;
    setBook(books.find((book) => book.id === id));
  }, [books, id]);

  // scroll to top of page upon mount
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div id='books__body'>
      <main id='books__main'>
        <div className='container container--book-info'>
          <div className='row'>
            <Link to='/books' className='home-links'>
              <FontAwesomeIcon icon={faArrowLeft} className='home-link' />
              <h2 className='home-link'>All Books</h2>
            </Link>
            {book && <BookSelected book={book} addItemToCart={addItemToCart} />}
          </div>
          <div className='row recc-books'>
            <h2 className='recc-books__title'>Recommended Books</h2>
            <div className='books__container'>
              {books &&
                books
                  .filter((book) => book.rating === 5 && book.id !== currentBookID) // if they are on book info page then show only new books
                  .slice(0, 4)
                  .map((book) => <Book book={book} key={book.id} />)}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
