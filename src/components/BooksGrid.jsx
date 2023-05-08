import Book from './Book';
import './BooksGrid.css';

export default function BooksGrid({ books }) {
  return (
    <div className='books-grid'>
      {books.map((book) => (
        <div className='book__wrapper' key={book.id}>
          <Book book={book} />
        </div>
      ))}
    </div>
  );
}
