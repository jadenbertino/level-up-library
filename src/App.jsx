import 'App.css';
import Home from 'pages/Home'
import Books from 'pages/Books'
import BookInfo from 'pages/BookInfo'
import Cart from 'pages/Cart'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/books" element={<Books /> } />
          <Route path="/books/:id" element={<BookInfo /> } />
          <Route path="/cart" element={<Cart /> } />
        </Routes>
      </Router>
    </>
  )
}
