import { useContext } from "react";
import { BooksContext } from '../context/BooksContext';

export function useBooksContext() {
  const context = useContext(BooksContext)

  if (!context) {
    throw new Error('modalContext must be accessed within a modalContextProvider')
  }

  return context
}