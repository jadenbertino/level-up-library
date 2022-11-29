export default function Price({originalPrice, salePrice}) {
  return (
    <div className="book__price">
      { salePrice
      ? <>
        <span className="book__price--strikethrough">${ originalPrice }</span>
        <span>${ salePrice }</span>
      </>
      : <span>${ originalPrice }</span>
      }
    </div>
  );
}
