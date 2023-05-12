import CartItem from './CartItem';
import cartIcon from '../../assets/empty_cart.svg';
import { Link } from 'react-router-dom';

export default function CartContents({ cart, updateCartQuantity, removeItem }) {
  return (
    <div className='cart__contents'>
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
        <div className='cart__empty'>
          <img src={cartIcon} className='cart__empty--img' alt='' />
          <p className='cart__empty--message'>Your cart is currently empty.</p>
          <Link to='/books'>
            <button className='btn cart__empty--btn'>Continue Shopping</button>
          </Link>
        </div>
      )}
    </div>
  );
}
