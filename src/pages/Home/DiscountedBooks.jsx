import { useEffect, useState } from 'react';

// hooks, components
import { useBooksContext } from '../../hooks/useBooksContext';
import BooksGrid from '../../components/BooksGrid';

export default function DiscountedBooks() {
  const { books } = useBooksContext()
  const [discountedBooks, setDiscountedBooks] = useState([])

  useEffect(() => {
    if (books.length < 1) return;
    setDiscountedBooks(books
      .filter((book) => book.salePrice > 0)
      .slice(0, 8))
  }, [books])
  
  return (
    <section id='recent'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h2 className='section__title'>
              Discounted <span className='text--purple'>Books</span>
            </h2>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            {discountedBooks.length
              ? <BooksGrid books={discountedBooks} />
              : null
            }
          </div>
        </div>
      </div>
    </section>
  );
}
