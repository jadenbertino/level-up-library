import './BookInfo.css';
import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { BestBooks } from 'components/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import BookSelected from './BookSelected'

export default function BookInfo({ books, addItemToCart }) {
  // Get information on current book
  const { id } = useParams();
  const book = books.find((book) => book.id === +id);
  // the + next to id converts it to a number (it is currently a string)

  // scroll to top of page upon mount
  useEffect(() => {
    window.scrollTo(0,0)
  });

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="container container--book-info">
          <div className="row">
            <Link to="/books" className="home-links">
              <FontAwesomeIcon icon={ faArrowLeft } className="home-link"/>
              <h2 className="home-link">Books</h2>
            </Link>
            <BookSelected book={book} addItemToCart={addItemToCart} />
          </div>
          <div className="row recc-books">
            <h2 className="recc-books__title">Recommended Books</h2>
            <BestBooks id={id} />
          </div>
        </div>
      </main>
    </div>
  )
}
