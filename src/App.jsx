import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Footer, Nav } from './components/components';
import { BookInfo, Books, Cart, Home } from './pages/pages';
import useCart from 'hooks/useCart';

// styles
import './App.css';

export default function App() {
  const { cart, addItemToCart, updateCart, removeItem, calcPrices, getNumBooks } = useCart()

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
                updateCart={updateCart}
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
