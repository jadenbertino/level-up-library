import Book from 'components/Book';
import { useCollection } from '../../hooks/useCollection';

export default function DiscountedBooks() {
  const { docs: books } = useCollection('books');

  return (
    <section id='recent'>
      <div className='container'>
        <div className='row'>
          <h2 className='section__title'>
            Discounted <span className='text--purple'>Books</span>
          </h2>
          <div className='books__container'>
            {books &&
              books
                .filter((book) => book.salePrice > 0)
                .slice(0, 8)
                .map((book) => <Book book={book} key={book.id} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
