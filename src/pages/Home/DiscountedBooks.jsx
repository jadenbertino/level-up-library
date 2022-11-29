import { bookData } from "assets/data";
import React from "react";
import Book from "components/Book";

export default function DiscountedBooks() {
  return (
    <section id="recent">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Discounted <span className="text--purple">Books</span>
          </h2>
          <div className="books__container">
            {bookData
              .filter((book) => book.salePrice > 0)
              .slice(0, 8)
              .map((book) => (
                <Book book={book} key={book.id} />
                ))}
          </div>
        </div>
      </div>
    </section>
  )
}
