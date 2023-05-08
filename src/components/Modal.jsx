import { createPortal } from 'react-dom';
import { useModalContext } from '../hooks/useModalContext';

// styles
import './Modal.css';

export default function Modal({ children, className }) {
  const root = document.querySelector('#root');
  const { closeModal } = useModalContext();
  
  return createPortal(
    <div className='modal-backdrop'>
      <div className={`modal ${className ? className : ''}`}>
        {children}
      </div>
      <div className='close-modal-overlay' onClick={closeModal}></div>
    </div>,
    root
  );
}