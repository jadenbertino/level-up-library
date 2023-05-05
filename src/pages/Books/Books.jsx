import Book from 'components/Book'
import { useCollection } from 'hooks/useCollection';
import { useEffect, useState } from 'react';

// styles
import './Books.css';

export default function Books() {
  const { docs: books } = useCollection('books');
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    setFilteredBooks(books);
  }, [books]);

  function filterBooks(filter) {
    switch (filter) {
      case 'LOW_TO_HIGH':
        return setFilteredBooks(
          books
            .slice() // make shallow copy of array to protect original
            .sort((a, b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice))
        );
      case 'HIGH_TO_LOW':
        return setFilteredBooks(
          books
            .slice()
            .sort((a, b) => (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice))
        );
      case 'RATING':
        return setFilteredBooks(books.slice().sort((a, b) => b.rating - a.rating));
      default:
        break;
    }
  }

  return (
    <div id='books__body'>
      <main id='books__main'>
        <section>
          <div className='container'>
            <div className='row'>
              <div className='books__header'>
                <h2 className='section__title books__header--title'>
                  All <span className='text--purple'>Books</span>
                </h2>
                {filteredBooks && (
                  <select
                    id='filter'
                    onChange={(event) => filterBooks(event.target.value)}
                    defaultValue={'DEFAULT'}
                  >
                    <option value='DEFAULT' disabled>
                      Sort
                    </option>
                    <option value='LOW_TO_HIGH'>Price, Low to High</option>
                    <option value='HIGH_TO_LOW'>Price, High to Low</option>
                    <option value='RATING'>Top Rated</option>
                  </select>
                )}
              </div>
              <div className='books__container'>
                {filteredBooks && filteredBooks.map((book) => <Book book={book} key={book.id} />)}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
