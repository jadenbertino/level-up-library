import BooksGrid from 'components/BooksGrid';
import { useEffect, useState } from 'react';
import { useBooksContext } from 'hooks/useBooksContext';

export default function PopularBooks() {
  const { books } = useBooksContext()
  const [topFourBooks, setTopFourBook] = useState([]);

  useEffect(() => {
    if (books.length < 1) return;
    setTopFourBook(books.filter((book) => book.rating === 5).slice(0, 4));
  }, [books]);

  return (
    <section id='featured'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h2 className='section__title'>
              Popular <span className='text--purple'>Books</span>
            </h2>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            {topFourBooks.length ? <BooksGrid books={topFourBooks} /> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
