export default function CartItem({ item }) {
  return (
    <div className="cart-item">
      <div className="cart-item__info">
        <img src={item.url} alt="" className="cart-item__img" />
        <div className="cart-item__description">
          <h4 className="cart-item__title">{item.title}</h4>
          <span className="cart-item__price">
            ${item.salePrice || item.originalPrice}
          </span>
          <button className="cart-item__remove-btn">Remove</button>
        </div>
      </div>
    </div>
  )
}
