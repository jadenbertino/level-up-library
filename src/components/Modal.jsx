import { createPortal } from 'react-dom';
import { useModalContext } from '../hooks/useModalContext';

// styles
import { useEffect, useState } from 'react';
import './Modal.css';

export default function Modal({ children, className }) {
  const root = document.querySelector('#root');
  const { closeModal } = useModalContext();
  const [modalVisible, setModalVisible] = useState(false);

  // fade in modal
  useEffect(() => {
    setTimeout(() => {
      setModalVisible(true);
    });
  }, []);

  function fadeOutModal() {
    setModalVisible(false);
    setTimeout(() => {
      closeModal();
    }, 100000);
  }

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
