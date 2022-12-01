import { Price, formatPrice } from "components/components";

export default function CartItem({ item, updateCart, removeItem }) {
  return (
    <div className="cart-item">
      <div className="cart-item__info">
        <img src={item.url} alt="" className="cart-item__img" />
        <div className="cart-item__description">
          <h4 className="cart-item__title">{item.title}</h4>
          <div className="cart-item__info-price">
            <Price
              originalPrice={item.originalPrice}
              salePrice={item.salePrice}
            />
          </div>
          <button
            className="cart-item__remove-btn"
            onClick={() => removeItem(item)}
          >
            Remove
          </button>
        </div>
      </div>
      <div className="cart-item__quantity">
        <input
          type="number"
          className="cart-item__quantity-input"
          value={item.quantity}
          min={0}
          max={99}
          onChange={(e) => updateCart(item, e.target.value)}
        />
      </div>
      <div className="cart-item__price">
        <span>
          ${ formatPrice((item.salePrice || item.originalPrice) * item.quantity) }
        </span>
      </div>
    </div>
  );
}
