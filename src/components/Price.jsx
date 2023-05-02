import { formatPrice } from "components/components";

export default function Price({ originalPrice, salePrice }) {
  const originalPriceFormatted = formatPrice(originalPrice);
  const salePriceFormatted = formatPrice(salePrice);
  
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
