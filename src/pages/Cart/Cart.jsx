import "./Cart.css";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

export default function Cart({ cart, updateCart, removeItem, totals }) {
  return (
    <main>
      <div className="container">
        <div className="row">
          <h2 className="section__title text--left">Cart</h2>
          <div className="cart__header">
            <span className="cart__header-books">Books</span>
            <span className="cart__header-quantity">Quantity</span>
            <span className="cart__header-price">Price</span>
          </div>
          <div className="cart__contents">
            {cart.length ? (
              cart.map((item) => (
                <CartItem
                  item={item}
                  updateCart={updateCart}
                  removeItem={removeItem}
                  key={item.id}
                />
              ))
            ) : ( <>
              <p className="cart__empty-message">
                Your cart is currently empty.
              </p>
              <Link to="/books">
                <button className="btn btn--cart-empty">Continue Shopping</button>
              </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
