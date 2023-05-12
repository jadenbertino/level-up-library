import Modal from '../../components/Modal';
import { useModalContext } from '../../hooks/useModalContext';

export default function ConfirmRemoveModal({ removeItem }) {
  const { modalContext, fadeOutModal } = useModalContext()

  function handleDelete() {
    removeItem(modalContext.payload);
    fadeOutModal();
  }

  return (
    <Modal className={'confirm-remove-modal'}>
      <img src={modalContext.payload.url} alt='' />
      <div className='text-content'>
        <h2>Are You Sure You Want To Remove "{modalContext.payload.title}"?</h2>
        <div className='btns'>
          <button className='btn cancel-btn' onClick={fadeOutModal}>
            Cancel
          </button>
          <button className='btn remove-btn' onClick={handleDelete}>
            Remove
          </button>
        </div>
      </div>
    </Modal>
  );
}
