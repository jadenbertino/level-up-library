import './BooksGrid.css'
import Book from './Book'

export default function BooksGrid({ books }) {
  return (
    <div className='books__container'>
      {books.map((book) => (
        <div className='book__wrapper' key={book.id}>
          <Book book={book} />
        </div>
      ))}
    </div>
  )
}