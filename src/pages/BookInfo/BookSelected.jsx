import { useState } from 'react';

// components
import Price from '../../components/Price';
import Rating from '../../components/Rating';

export default function BookSelected({ book, addItemToCart }) {
  const [confirmCart, setConfirmCart] = useState(false);

  function handleAddToCart() {
    addItemToCart(book);
    setConfirmCart(true);
    setTimeout(() => {
      setConfirmCart(false);
    }, 1000);
  }

  return (
    <div className='book-selected'>
      <img src={book.url} alt='' className='desktop-img' />
      <div className='info'>
        <h2 className='title'>{book.title}</h2>
        <div className='rating-and-price'>
          <Rating rating={book.rating} />
          <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
        </div>
        <div className='mobile-img-wrapper'>
          <img src={book.url} alt='' className='mobile-img' />
        </div>
        <div className='summary'>
          <h3 className='title'>Summary</h3>
          <p className='para'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab odit iste molestias corporis
            ducimus? Temporibus placeat, tempore vitae autem culpa error nesciunt ipsa est et
            ratione impedit necessitatibus repudiandae unde.
          </p>
          <p className='para'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores soluta tempore nam ab
            debitis. Ex, consectetur! Officiis rerum obcaecati quae, a accusantium, consequatur,
            dignissimos quia velit aperiam dolor quisquam pariatur?
          </p>
          <button
            className={`btn${confirmCart ? ' confirm-active' : ''}`}
            onClick={handleAddToCart}
            disabled={confirmCart}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
