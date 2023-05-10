import { createPortal } from 'react-dom';
import { useModalContext } from '../hooks/useModalContext';

// styles
import { useEffect, useState } from 'react';
import 'styles/components/Modal.css';

export default function Modal({ children, className }) {
  const root = document.querySelector('#root');
  const { fadeOutModal, modalContext } = useModalContext();
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
  }, [modalContext.isFadingOut])

  return createPortal(
    <div className={`modal-backdrop fade-in${modalVisible ? ' visible' : ''}`}>
      <div className={`modal ${className ? className : ''}`}>
        {children}
      </div>
      <div className='close-modal-overlay' onClick={fadeOutModal}></div>
    </div>,
    root
  );
}
