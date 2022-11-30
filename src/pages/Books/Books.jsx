import "./Books.css";
import React, { useState, useEffect } from "react";
import { Book } from "components/components";

export default function Books({ books: initialBooks }) {
  /* Force initial books to reload page upon load */
  const [books, setBooks] = useState();

  useEffect(() => {
    setBooks(initialBooks);
  }, [initialBooks]);

  function filterBooks(filter) {
    switch (filter) {
      // make a copy, sort array, return the array, reload page
      case "LOW_TO_HIGH":
        return setBooks(
          books
            .slice() // make shallow copy of array to protect original
            .sort(
              (a, b) =>
                (a.salePrice || a.originalPrice) -
                (b.salePrice || b.originalPrice)
            )
          // OR returns first truthy value
          // so above will give sale price if it exists,
          // or normal price if not on sale
        );
      case "HIGH_TO_LOW":
        return setBooks(
          books
            .slice()
            .sort(
              (a, b) =>
                (b.salePrice || b.originalPrice) -
                (a.salePrice || a.originalPrice)
            )
        );
      case "RATING":
        return setBooks(books.slice().sort((a, b) => b.rating - a.rating));
      // a - b gives you low to high sort
      // b - a gives you high to low sort
      default:
        break; // just best practice to have a default cause
    }
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <section>
          <div className="container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title books__header--title">
                  All <span className="text--purple">Books</span>
                </h2>
                <select
                  id="filter"
                  onChange={(event) => filterBooks(event.target.value)}
                  defaultValue={"DEFAULT"}
                >
                  <option value="DEFAULT" disabled>
                    Sort
                  </option>
                  <option value="LOW_TO_HIGH">Price, Low to High</option>
                  <option value="HIGH_TO_LOW">Price, High to Low</option>
                  <option value="RATING">Top Rated</option>
                </select>
              </div>
              <div className="books__container">
                {books &&
                  books.map((book) => <Book book={book} key={book.id} />)}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
