import { Rating, Price } from 'components/components'
import React, { useState, useEffect, useRef }  from 'react';
import { Link } from 'react-router-dom'

export default function Book({book}) {
  return(
    <div className="book">
      <figure className="book__img--wrapper">
        <img src={book.url} alt="" className="book__img" />
      </figure>
      <div className="book__info">
        <h3 className="book__title">
          {book.title}
        </h3>
        <Rating rating={4.5} />
        <Price originalPrice={book.originalPrice} salePrice={14.95} />
      </div>
    </div>
  )
}