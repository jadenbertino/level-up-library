export default function Price({originalPrice, salePrice}) {
  return (
    <div className="book__price">
      <span className="book__price--original">${ originalPrice }</span>
      <span className="book__price--sale">${ salePrice }</span>
    </div>
  );
}
