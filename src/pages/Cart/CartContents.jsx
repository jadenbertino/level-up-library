import CartItem from './CartItem';
import cartIcon from '../../assets/empty_cart.svg';
import { Link } from 'react-router-dom';

export default function CartContents({ cart, updateCartQuantity, removeItem }) {
  return (
    <div className='cart-contents'>
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
        <div className='cart-empty'>
          <img src={cartIcon} className='cart-empty__img' alt='' />
          <p className='cart-empty__message'>Your cart is currently empty.</p>
          <Link to='/books'>
            <button className='btn cart-empty__btn'>Continue Shopping</button>
          </Link>
        </div>
      )}
    </div>
  );
}
