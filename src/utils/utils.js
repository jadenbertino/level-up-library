import { animateScroll as scroll } from 'react-scroll';

export function formatPrice(price) {
  if (Number.isInteger(price)) {
    return price;
  } else if (Number) {
    return (Math.round(price * 100) / 100).toFixed(2);
  } else {
    return null;
  }
}

export function scrollToTop() {
  scroll.scrollToTop({
    duration: 500
  })
}