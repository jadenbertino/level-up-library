import useLocalStorage from 'hooks/useLocalStorage';

export default function useCart() {
  const [cart, setCart] = useLocalStorage('cartLocalStorage', []);

  function addItemToCart(book) {
    const dupeItem = cart.find((item) => item.id === book.id); // returns dupe object or null
    setCart((oldCart) =>
      dupeItem
        ? // item already in cart -> add 1 to quantity
          oldCart.map((item) =>
            item.id === dupeItem.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        : // item not in cart -> set quantity to 1
          [...oldCart, { ...book, quantity: 1 }]
    );
  }
  
  function updateCartQuantity(item, newQuantity) {
    setCart((oldCart) =>
      oldCart.map((oldItem) =>
        oldItem.id === item.id ? { ...oldItem, quantity: +newQuantity } : oldItem
      )
    );
  }
  
  function removeItem(item) {
    setCart((oldCart) => oldCart.filter((cartItem) => cartItem.id !== item.id));
  }
  
  function getNumBooks() {
    let numBooks = 0;
    cart.forEach((item) => (numBooks += item.quantity));
    return numBooks;
  }
  
  function calcPrices() {
    let total = 0;
    cart.forEach((item) => {
      total += (item.salePrice || item.originalPrice) * item.quantity;
    });
    return {
      subtotal: total * 0.9,
      tax: total * 0.1,
      total,
    };
  }
  
  return { cart, setCart, addItemToCart, updateCartQuantity, removeItem, getNumBooks, calcPrices}
}
