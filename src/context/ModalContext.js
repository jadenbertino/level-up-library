import { createContext, useState } from 'react';

export const ModalContext = createContext();

export function ModalContextProvider({ children }) {
  const [modalContext, setModalContext] = useState({
    type: '',
    payload: null,
  });

  function closeModal() {
    setModalContext({});
  }

  return (
    <ModalContext.Provider value={{ modalContext, setModalContext, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}
