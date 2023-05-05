import Book from 'components/Book';
import { useCollection } from '../../hooks/useCollection';

export default function PopularBooks() {
  const { docs: books } = useCollection('books');

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
            <div className='books__container'>
              {books &&
                books
                  .filter((book) => book.rating === 5)
                  .slice(0, 4)
                  .map((book) => <Book book={book} key={book.id} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
