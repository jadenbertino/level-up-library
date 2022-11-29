import { Rating, Price } from "components/components";

export default function BookSeleted({ book }) {
  return (
    <div className="book-selected__container">
      <img src="" alt="" className="book-selected__img" />
      <div className="book-selected__information">
        <h2 className="book-selected__title">{book}</h2>
        <Rating rating={book.rating} />
        <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
      </div>
      <div className="summary">
        <h3 className="summary__title">Summary</h3>
        <p className="summary__para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab odit iste
          molestias corporis ducimus? Temporibus placeat, tempore vitae autem
          culpa error nesciunt ipsa est et ratione impedit necessitatibus
          repudiandae unde.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
          soluta tempore nam ab debitis. Ex, consectetur! Officiis rerum
          obcaecati quae, a accusantium, consequatur, dignissimos quia velit
          aperiam dolor quisquam pariatur?
        </p>
      </div>
    </div>
  );
}
