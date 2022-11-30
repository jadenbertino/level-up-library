import { Rating, Price } from 'components/components'
import React, { useState, useEffect, useRef }  from 'react';
import { Link } from 'react-router-dom'
import './Book.css'

export default function Book({book}) {
  return(
    <div className="book">
      <Link to={`/books/${book.id}`} className="book__img--wrapper">
        <img src={book.url} alt="" className="book__img" />
      </Link>
      <Link to={`/books/${book.id}`} className="book__info">
        <h3 className="book__title">
          {book.title}
        </h3>
        <Rating rating={book.rating} />
        <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
      </Link>
    </div>
  )
}
