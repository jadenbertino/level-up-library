import { createContext, useState } from 'react';

export const ModalContext = createContext();

export function ModalContextProvider({ children }) {
  const initialModalContext = {
    type: '',
    payload: null,
    isFadingOut: false,
  }

  const [modalContext, setModalContext] = useState(initialModalContext);

  function fadeInModal({ type, payload }) {
    setModalContext(prev => ({
      ...prev,
      type,
      payload
    }))
  }

  function fadeOutModal(e) {
    const backdropWasClicked = e.target.classList.contains('modal__backdrop');
    if (backdropWasClicked) {
      setModalContext(prev => ({...prev, isFadingOut: true}))
      setTimeout(() => {
        setModalContext(initialModalContext)
      }, 300) // must match the transition time in Modal.css
    }
  }

  return (
    <ModalContext.Provider value={{ modalContext, setModalContext, fadeOutModal, fadeInModal }}>
      {children}
    </ModalContext.Provider>
  );
}
