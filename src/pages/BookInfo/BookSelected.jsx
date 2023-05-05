import Price from 'components/Price'
import Rating from 'components/Rating'

export default function BookSelected({ book, addItemToCart }) {
  return (
    <div className='book-selected__container'>
      <img src={book.url} alt='' className='book-selected__img' />
      <div className='book-selected__info'>
        <h2 className='book-selected__title'>{book.title}</h2>
        <Rating rating={book.rating} />
        <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
        <div className='summary__wrapper'>
          <h3 className='summary__title'>Summary</h3>
          <p className='summary__para'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab odit iste molestias corporis
            ducimus? Temporibus placeat, tempore vitae autem culpa error nesciunt ipsa est et
            ratione impedit necessitatibus repudiandae unde.
          </p>
          <p className='summary__para'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores soluta tempore nam ab
            debitis. Ex, consectetur! Officiis rerum obcaecati quae, a accusantium, consequatur,
            dignissimos quia velit aperiam dolor quisquam pariatur?
          </p>
        </div>
        <button className='btn' onClick={() => addItemToCart(book)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}
