import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// components
import Price from './Price';
import Rating from './Rating';

// styles
import '../css/components/Book.css'

export default function Book({ book }) {
  const [bookImg, setBookImg] = useState();
  const isMountedRef = useRef(true);

  useEffect(() => {
    const image = new Image();
    image.src = book.url;
    image.onload = () => {
      if (isMountedRef.current) {
        setBookImg(image);
      }
    };
    return () => (isMountedRef.current = false);
  });

  return (
  <>
    {bookImg ? (
      <div className='book'>
        <div className='book__img--wrapper'>
          <Link to={`/books/${book.id}`} className='book__img'>
            <img src={book.url} alt='' className='book__img' />
          </Link>
        </div>
        <Link to={`/books/${book.id}`} className='book__info'>
          <h3 className='book__title'>{book.title}</h3>
          <Rating rating={book.rating} />
          <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
        </Link>
      </div>
    ) : (
      <div className='book-skeleton'>
        <div className='book-skeleton__img'></div>
        <div className='book-skeleton__title'></div>
        <div className='book-skeleton__rating'></div>
        <div className='book-skeleton__price'></div>
      </div>
    )}
  </>
  );
}
