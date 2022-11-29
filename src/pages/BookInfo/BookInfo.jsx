import './BookInfo.css';
import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { BestBooks } from 'components/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import BookSelected from './BookSelected'

export default function BookInfo({ books }) {
  // Get information on current book
  const { id } = useParams();
  const book = books.find((book) => book.id === +id);
  // the + next to id converts it to a number (it is currently a string)

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="container">
          <div className="row">
            <div className="home-links">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon={ faArrowLeft } />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title-top">Books</h2>
              </Link>
            </div>
            < BookSelected books={book} />
          </div>
        </div>
      </main>
    </div>
  )
}
