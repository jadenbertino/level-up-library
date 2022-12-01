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
        {/* <input
          type="number"
          className="cart-item__quantity-input"
          value={item.quantity}
          min={0}
          max={99}
          onChange={(e) => updateCart(item, e.target.value)}
        /> */}
        <select
          value={String(item.quantity)}
          defaultValue={"1"}
          className="cart-item__quantity-select"
          onChange={(e) => updateCart(item, e.target.value)}
        >
          <option className="cart-item__quantity-select-option" value={"1"}>1</option>
          <option className="cart-item__quantity-select-option" value={"2"}>2</option>
          <option className="cart-item__quantity-select-option" value={"3"}>3</option>
          <option className="cart-item__quantity-select-option" value={"4"}>4</option>
          <option className="cart-item__quantity-select-option" value={"5"}>5</option>
          <option className="cart-item__quantity-select-option" value={"6"}>6</option>
          <option className="cart-item__quantity-select-option" value={"7"}>7</option>
          <option className="cart-item__quantity-select-option" value={"8"}>8</option>
          <option className="cart-item__quantity-select-option" value={"9"}>9</option>
          <option className="cart-item__quantity-select-option" value={"10"}>10</option>
        </select>
      </div>
      <div className="cart-item__price">
        <span>
          ${formatPrice((item.salePrice || item.originalPrice) * item.quantity)}
        </span>
      </div>
    </div>
  );
}
