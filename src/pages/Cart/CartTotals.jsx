export default function CartTotals({ subtotal, tax, total, }) {
  
  function handleCheckout() {
    alert("This is a mockup site, so it's not possible to purchase books at this time.")
  }

  return (
    <div className='totals'>
      <div className='totals__wrapper'>
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
        <button className='totals__checkout-btn' onClick={handleCheckout}>Proceed to checkout</button>
      </div>
    </div>
  );
}
