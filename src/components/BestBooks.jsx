import { bookData } from "assets/data";
import { Book } from "components/components";
import { Books } from "pages/pages";

export default function BestBooks({ currentID }) {
  return (
    <div className="books">
      {bookData
        .filter((book) => book.rating === 5 && book.id !== currentID) // ensure you show only new books (when they are on a book info page)
        .slice(0, 4)
        .map((book) => (<Book book={book} key={book.id} />))}
    </div>
  );
}
