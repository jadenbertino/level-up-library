// components, hooks, utils
import { useModalContext } from '../../hooks/useModalContext';
import { formatPrice } from '../../utils/utils';

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
    <main id='cart'>
      <header>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <h2 className='header'>Cart</h2>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <div className='categories'>
                <span>Book</span>
                <span className='categories__quantity'>Quantity</span>
                <span className='categories__price'>Price</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col'>
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
