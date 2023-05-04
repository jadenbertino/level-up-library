import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils/BookUtils';
import CartItem from './CartItem';

// styles
import './Cart.css';
import cartIcon from 'assets/empty_cart.svg'

export default function Cart({ cart, updateCart, removeItem, totals }) {
  let { subtotal, tax, total } = totals;
  [subtotal, tax, total] = [subtotal, tax, total].map((amount) => formatPrice(amount));
  return (
    <main>
      <div className='container'>
        <div className='row'>
          <h2 className='section__title text--left'>Cart</h2>
          <div className='cart__header'>
            <span className='cart__header-books'>Books</span>
            <span className='cart__header-quantity'>Quantity</span>
            <span className='cart__header-price'>Price</span>
          </div>
          <div className='cart__contents'>
            {cart.length ? (
              cart.map((item) => (
                <CartItem
                  item={item}
                  updateCart={updateCart}
                  removeItem={removeItem}
                  key={item.id}
                />
              ))
            ) : (
              <>
                <img
                  src={cartIcon}
                  className='cart__empty-img'
                  alt=''
                />
                <p className='cart__empty-message'>Your cart is currently empty.</p>
                <Link to='/books'>
                  <button className='btn btn--cart-empty'>Continue Shopping</button>
                </Link>
              </>
            )}
          </div>
          {subtotal > 0 ? (
            <div className='cart__totals'>
              <div className='cart__totals--wrapper'>
                <div className='cart__row'>
                  <span>Subtotal</span>
                  <span>${subtotal}</span>
                </div>
                <div className='cart__row'>
                  <span>Tax</span>
                  <span>${tax}</span>
                </div>
                <div className='cart__row'>
                  <span>Total</span>
                  <span>${total}</span>
                </div>
                <button className='btn'>Proceed to checkout</button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </main>
  );
}
