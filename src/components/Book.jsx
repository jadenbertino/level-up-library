import Price from 'components/Price';
import Rating from 'components/Rating';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// styles
import 'css/components/Book.css';

export default function Book({ book }) {
  const [bookImg, setBookImg] = useState();
  const mountedRef = useRef(true);

  useEffect(() => {
    const image = new Image();
    image.src = book.url;
    image.onload = () => {
      if (mountedRef.current) {
        setBookImg(image);
      }
    };
    return () => {
      // when component unmounts
      mountedRef.current = false;
    };
  });

  return (
    <div className='book'>
      {bookImg ? (
        <>
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
        </>
      ) : (
        <div className='book--skeleton'>
          <div className='book__img--skeleton'></div>
          <div className='book__title--skeleton'></div>
          <div className='book__rating--skeleton'></div>
          <div className='book__price--skeleton'></div>
        </div>
      )}
    </div>
  );
}
