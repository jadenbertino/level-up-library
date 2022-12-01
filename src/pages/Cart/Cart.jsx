import "./Cart.css";

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
        </div>
        { }
      </div>
    </main>
  );
}
