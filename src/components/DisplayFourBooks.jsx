import { Book } from 'components/components';
import { useCollection } from 'hooks/useCollection';

export default function DisplayFourBooks({ currentBookID }) {
  const { docs: books } = useCollection('books');

  return (
    <div className='books__container'>
      {books && books
          .filter((book) => book.rating === 5 && book.id !== currentBookID) // if they are on book info page then show only new books
          .slice(0, 4)
          .map((book) => <Book book={book} key={book.id} />)}
    </div>
  );
}
