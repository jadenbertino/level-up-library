import CartItem from './CartItem';
import cartIcon from '../../assets/empty_cart.svg';
import { Link } from 'react-router-dom';

export default function CartContents({ cart, updateCartQuantity, removeItem }) {
  return (
    <div className='contents'>
      {cart.length > 0 ? (
        cart.map((item) => (
          <CartItem
            item={item}
            updateCartQuantity={updateCartQuantity}
            removeItem={removeItem}
            key={item.id}
          />
        ))
      ) : (
        <div className='empty'>
          <img src={cartIcon} className='empty__img' alt='' />
          <p className='empty__message'>Your cart is currently empty.</p>
          <Link to='/books'>
            <button className='empty__btn'>Continue Shopping</button>
          </Link>
        </div>
      )}
    </div>
  );
}
