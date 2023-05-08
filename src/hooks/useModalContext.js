import { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';

export function useModalContext() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('modalContext must be accessed within a modalContextProvider');
  }

  return context;
}
