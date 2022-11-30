import "./App.css";
import { Home, Books, BookInfo } from "./pages/pages";
import { Nav, Footer } from "./components/components";
import { bookData } from "assets/data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function App() {

  /* ------------------ CART ------------------ */
  const [cart, setCart] = useState([]);

  function addItemToCart(book) {
    const dupeItem = cart.find((item) => item.id === book.id); // returns dupe object or null

    // update cart + reload page
    setCart((oldCart) => {
      if (dupeItem) {
        return oldCart.map((item) => {
          return item.id === dupeItem.id
          ? {...item, quantity: item.quantity + 1 }
          : item
        })
      } else {
        return [...oldCart, { ...book, quantity: 1}];
      }
    })
  }

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={bookData} />} />
          <Route
            path="/books/:id"
            element={
              <BookInfo books={bookData} addItemToCart={addItemToCart} />
            }
          />
          {/* <Route path="/cart" element={<Cart /> } /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
