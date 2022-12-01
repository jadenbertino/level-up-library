import "./Cart.css";
import CartItem from "./CartItem";

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
            ) : (
              <h3 className="cart__empty-message">
                Your cart is currently empty.
              </h3>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
