import { Rating, Price } from 'components/components'

export default function Book(book) {
  return(
    <div className="book">
      <figure className="book__img--wrapper">
        <img src={ require('assets/featured-1.png')} alt="" className="book__img" />
      </figure>
      <h3 className="book__title">Cracking The Coding Interview</h3>
      <Rating rating={4.5} />
      <Price originalPrice={59.95} salePrice={14.95} />
    </div>
  )
}