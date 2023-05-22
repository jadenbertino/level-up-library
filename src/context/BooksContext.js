import { createContext, useEffect, useState } from 'react';

// hooks
import { useCollection } from '../hooks/useCollection';

export const BooksContext = createContext();

export function BooksContextProvider({ children }) {
  const [books, setBooks] = useState([]);
  const { docs: bookFetch } = useCollection('books');

  useEffect(() => {
    if (bookFetch.length < 1) return;
    setBooks(bookFetch)
  }, [bookFetch])
  
  return (
    <BooksContext.Provider value={{ books, setBooksContext: setBooks}}>
      {children}
    </BooksContext.Provider>
  );
}