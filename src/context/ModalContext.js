import { createContext, useState } from 'react';

export const ModalContext = createContext();

export function ModalContextProvider({ children }) {
  const initialModalState = {
    type: '',
    payload: null,
    isFadingOut: false,
  }

  const [modalContext, setModalContext] = useState(initialModalState);

  function fadeInModal({ type, payload }) {
    setModalContext(prev => ({
      ...prev,
      type,
      payload
    }))
  }

  function handleBackdropClick(e) {
    const backdropWasClicked = e.target.classList.contains('modal__backdrop');
    if (backdropWasClicked) {
      fadeOutModal()
    }
  }

  function fadeOutModal() {
    setModalContext(prev => ({...prev, isFadingOut: true}))
    setTimeout(() => {
      setModalContext(initialModalState)
    }, 300) // must match the transition time in Modal.css
  }

  return (
    <ModalContext.Provider value={{ modalContext, setModalContext, fadeOutModal, fadeInModal, handleBackdropClick }}>
      {children}
    </ModalContext.Provider>
  );
}
