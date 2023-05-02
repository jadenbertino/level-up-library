import { useCollection } from "hooks/useCollection";
import { Book } from "components/components";

export default function BestBooks({ currentID }) {
  const { docs: bookData } = useCollection('books')
  return (
    <div className="books__container">
      {bookData && bookData
        .filter((book) => book.rating === 5 && book.id !== currentID) // ensure you show only new books (when they are on a book info page)
        .slice(0, 4)
        .map((book) => (<Book book={book} key={book.id} />))}
    </div>
  );
}
