export default function CartTotals({ subtotal, tax, total, }) {
  return (
    <div className='cart-totals'>
      <div className='cart-totals__wrapper'>
        <div className='cart-totals__row'>
          <span>Subtotal</span>
          <span>${subtotal}</span>
        </div>
        <div className='cart-totals__row'>
          <span>Tax</span>
          <span>${tax}</span>
        </div>
        <div className='cart-totals__row final'>
          <span>Total</span>
          <span>${total}</span>
        </div>
        <button className='cart-totals__checkout-btn'>Proceed to checkout</button>
      </div>
    </div>
  );
}
