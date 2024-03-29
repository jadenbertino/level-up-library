import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

// hooks
import { useModalContext } from '../hooks/useModalContext';

// styles
import '../css/components/Modal.css';

export default function Modal({ children, className }) {
  const root = document.querySelector('#root');
  const { handleBackdropClick, modalContext } = useModalContext();
  const [modalVisible, setModalVisible] = useState(false);

  // fade in modal
  useEffect(() => {
    setTimeout(() => {
      setModalVisible(true);
    });
  }, []);

  // fade out modal
  useEffect(() => {
    if (modalContext.isFadingOut) {
      setModalVisible(false);
    }
  }, [modalContext.isFadingOut]);

  return createPortal(
    <div onClick={handleBackdropClick} className={`modal__backdrop fade-in${modalVisible ? ' visible' : ''}`} >
      <div className={`modal ${className ? className : ''}`}>{children}</div>
    </div>,
    root
  );
}
