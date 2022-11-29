export default function Price({ originalPrice, salePrice }) {
  function formatPrice(price) {
    if (Number.isInteger(price)) {
      return price;
    } else if (Number) {
      return (Math.round(price * 100) / 100).toFixed(2);
    } else {
      return null;
    }
  }
  const originalPriceFormatted = formatPrice(originalPrice);
  const salePriceFormatted = formatPrice(salePrice);
  // Display
  return (
    <div className="book__price">
      { salePrice ? (
        <>
          <span className="book__price--strikethrough">
            ${originalPriceFormatted}
          </span>
          <span>${salePriceFormatted}</span>
        </>
      ) : (
        <span>${originalPriceFormatted}</span>
      )}
    </div>
  );
}
