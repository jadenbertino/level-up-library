export default function CartTotals({ subtotal, tax, total, }) {
  return (
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
        <div className='totals__row final'>
          <span>Total</span>
          <span>${total}</span>
        </div>
        <button className='btn'>Proceed to checkout</button>
      </div>
    </div>
  );
}
