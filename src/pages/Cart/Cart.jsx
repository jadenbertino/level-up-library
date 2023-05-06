import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils/BookUtils';
import CartItem from './CartItem';

// styles
import cartIcon from 'assets/empty_cart.svg';
import './Cart.css';

export default function Cart({ cart, updateCartQuantity, removeItem, totals }) {
  let { subtotal, tax, total } = totals;
  [subtotal, tax, total] = [subtotal, tax, total].map((amount) => formatPrice(amount));

  return (
    <main id='cart' className='expand-vertically'>
      <div className='container expand-vertically'>
        <div className='row section__title'>
          <div className='col'>
            <h2>Cart</h2>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <div className='cart__header'>
              <span className='cart__header-books'>Books</span>
              <span className='cart__header-quantity'>Quantity</span>
              <span className='cart__header-price'>Price</span>
            </div>
          </div>
        </div>
        <div className='row expand-vertically'>
          <div className='col expand-vertically'>
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
                  <img src={cartIcon} className='cart__empty-img' alt='' />
                  <p className='cart__empty-message'>Your cart is currently empty.</p>
                  <Link to='/books'>
                    <button className='btn btn--cart-empty'>Continue Shopping</button>
                  </Link>
                </div>
              )}
            </div>
            {subtotal > 0 ? (
              <div className='totals'>
                <div className='totals--wrapper'>
                  <div className='totals__row'>
                    <span>Subtotal</span>
                    <span>${subtotal}</span>
                  </div>
                  <div className='totals__row'>
                    <span>Tax</span>
                    <span>${tax}</span>
                  </div>
                  <div className='totals__row'>
                    <span>Total</span>
                    <span>${total}</span>
                  </div>
                  <button className='btn'>Proceed to checkout</button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </main>
  );
}
