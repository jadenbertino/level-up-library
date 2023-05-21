import Modal from '../../components/Modal';
import { useModalContext } from '../../hooks/useModalContext';

export default function ConfirmRemoveModal({ removeItem }) {
  const { modalContext, fadeOutModal } = useModalContext()

  function handleDelete() {
    removeItem(modalContext.payload);
    fadeOutModal();
  }

  return (
    <Modal className={'confirm-remove'}>
      <img src={modalContext.payload.url} alt='' className='confirm-remove__img'/>
      <div className='confirm-remove__text'>
        <h2 className='confirm-remove__header'>Are You Sure You Want To Remove "{modalContext.payload.title}"?</h2>
        <div className='confirm-remove__btns'>
          <button className='confirm-remove__cancel-btn' onClick={fadeOutModal}>
            Cancel
          </button>
          <button className='confirm-remove__remove-btn' onClick={handleDelete}>
            Remove
          </button>
        </div>
      </div>
    </Modal>
  );
}