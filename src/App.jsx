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

    setCart((oldCart) =>
      dupeItem
        // item already in cart -> add 1 to quantity
        ? oldCart.map((item) =>
            item.id === dupeItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        // item not in cart -> set quantity to 1
        : [...oldCart, { ...book, quantity: 1 }]
    );
  }

  function updateCart(item, newQuantity) {
    setCart((oldCart) =>
      oldCart.map((oldItem) =>
        oldItem.id === item.id ? { ...oldItem, quantity: newQuantity } : oldItem
      )
    );
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
