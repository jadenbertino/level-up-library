import './BookInfo.css';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { DisplayFourBooks } from 'components/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import BookSelected from './BookSelected'
import { useCollection } from 'hooks/useCollection';

export default function BookInfo({ addItemToCart }) {
  const { id } = useParams();
  const { docs: books } = useCollection('books')
  const [book, setBook] = useState(null)

  useEffect(() => {
    if (!books) return
    setBook(books.find((book) => book.id === id))
  }, [books, id])

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
              <h2 className="home-link">All Books</h2>
            </Link>
            {book && <BookSelected book={book} addItemToCart={addItemToCart} />}
          </div>
          <div className="row recc-books">
            <h2 className="recc-books__title">Recommended Books</h2>
            {books &&  <DisplayFourBooks id={id} /> }
          </div>
        </div>
      </main>
    </div>
  )
}
