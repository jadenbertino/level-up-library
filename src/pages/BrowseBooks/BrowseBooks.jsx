import { useEffect, useState } from 'react';

// hooks
import { useBooksContext } from '../../hooks/useBooksContext';

// styles
import BooksGrid from '../../components/BooksGrid';
import '../../css/pages/BrowseBooks/BrowseBooks.css';

export default function Books() {
  const { books } = useBooksContext();
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
    <main id='browse'>
      <header>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='header'>
                <h2 className='header__title'>
                  All <span className='text--purple'>Books</span>
                </h2>
                <select 
                  className='header__select'
                  id='filter'
                  onChange={(e) => filterBooks(e.target.value)}
                  defaultValue={'DEFAULT'}
                >
                  <option value='DEFAULT' disabled>
                    Sort
                  </option>
                  <option value='LOW_TO_HIGH'>Price, Low to High</option>
                  <option value='HIGH_TO_LOW'>Price, High to Low</option>
                  <option value='RATING'>Top Rated</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className='books'>
        <div className='container'>
          <div className='row'>
            <div className='col'></div>
          </div>
          <div className='row'>
            <div className='col'>
              {filteredBooks.length ? <BooksGrid books={filteredBooks} /> : null}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
