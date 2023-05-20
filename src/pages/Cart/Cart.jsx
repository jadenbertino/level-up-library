// components, hooks, utils
import { useModalContext } from '../../hooks/useModalContext';
import { formatPrice } from '../../utils/BookUtils';

// styles
import '../../css/pages/Cart/Cart.css';
import CartContents from './CartContents';
import CartTotals from './CartTotals';
import ConfirmRemoveModal from './ConfirmRemoveModal';

export default function Cart({ cart, updateCartQuantity, removeItem, totals }) {
  const { modalContext } = useModalContext();

  let { subtotal, tax, total } = totals;
  [subtotal, tax, total] = [subtotal, tax, total].map((amount) => formatPrice(amount));

  return (
    <main className='cart expand-vertically'>
      <header>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <h2 className='cart-header'>Cart</h2>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <div className='cart-categories'>
                <span>Books</span>
                <span className='cart-categories__quantity'>Quantity</span>
                <span className='cart-categories__price'>Price</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className='container expand-vertically'>
          <div className='row expand-vertically'>
            <div className='col expand-vertically'>
              <CartContents
                cart={cart}
                updateCartQuantity={updateCartQuantity}
                removeItem={removeItem}
              />
              {subtotal > 0 ? <CartTotals subtotal={subtotal} tax={tax} total={total} /> : null}
            </div>
          </div>
        </div>
      </section>
      {modalContext.type === 'confirm-remove' && <ConfirmRemoveModal removeItem={removeItem} />}
    </main>
  );
}
