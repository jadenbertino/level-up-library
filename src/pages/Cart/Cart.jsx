import "./Cart.css";
import CartItem from './CartItem'

export default function Cart({ cart, updateCart, removeItem, totals }) {
  return (
    <main>
      <div className="container">
        <div className="row">
          <h2 className="cart__title">Cart</h2>
          <div className="cart__display-bar">
            <span className="cart__display-bar-item">Books</span>
            <span className="cart__display-bar-item">Quantity</span>
            <span className="cart__display-bar-item">Price</span>
          </div>
          <div className="cart__contents">
            {
            cart.length
            ? cart.map((item) => <CartItem item={item} key={item.id}/>)
            : <h3 className="cart__empty-message">Your cart is currently empty.</h3>
            }
          </div>

        </div>
      </div>
    </main>
  );
}
