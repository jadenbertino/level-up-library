import Price from 'components/Price';
import { useModalContext } from 'hooks/useModalContext';
import { formatPrice } from 'utils/BookUtils';

export default function CartItem({ item, updateCartQuantity }) {
  const { setModalContext } = useModalContext();

  function decrementQuantity() {
    if (item.quantity > 1) {
      updateCartQuantity(item, item.quantity - 1);
    }
    if (item.quantity === 1) {
      setModalContext({
        type: 'confirm-remove',
        payload: item,
      });
    }
  }

  function incrementQuantity() {
    updateCartQuantity(item, item.quantity + 1);
  }

  return (
    <div className='cart-item'>
      <div className='img-and-description'>
        <img src={item.url} alt='' className='cart-item__img' />
        <div className='cart-item__description'>
          <h4 className='cart-item__title'>{item.title}</h4>
          <div className='cart-item__price'>
            <Price originalPrice={item.originalPrice} salePrice={item.salePrice} />
          </div>
        </div>
      </div>
      <div className='quantity-and-title'>
        <h4 className='cart-item__title mobile-only'>{item.title}</h4>
        <div className='cart-item__quantity'>
          <button className='btn adjust-quantity' onClick={decrementQuantity}>
            -
          </button>
          <span className='current-quantity'>{item.quantity}</span>
          <button className='btn adjust-quantity' onClick={incrementQuantity}>
            +
          </button>
        </div>
      </div>
      <div className='cart-item__total-price'>
        <span>${formatPrice((item.salePrice || item.originalPrice) * item.quantity)}</span>
      </div>
    </div>
  );
}
