import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// pages
import BookInfo from './pages/BookInfo/BookInfo';
import Books from './pages/BrowseBooks/BrowseBooks';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';

// components & hooks
import useCart from './hooks/useCart';
import Footer from 'components/Footer';
import Nav from 'components/Nav';

// styles
import './css/App.css';

export default function App() {
  const { cart, addItemToCart, updateCartQuantity, removeItem, calcPrices, getNumBooks } =
    useCart();

  return (
    <div className='app'>
      <Router>
        <Nav numBooks={getNumBooks()} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books' element={<Books />} />
          <Route path='/books/:id' element={<BookInfo addItemToCart={addItemToCart} />} />
          <Route
            path='/cart'
            element={
              <Cart
                cart={cart}
                updateCartQuantity={updateCartQuantity}
                removeItem={removeItem}
                totals={calcPrices()}
              />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
