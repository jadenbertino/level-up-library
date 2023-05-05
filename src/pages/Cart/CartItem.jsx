import Price from 'components/Price'
import Select from 'react-select';
import { formatPrice } from 'utils/BookUtils';

const selectOptions = [
  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '3', value: 3 },
  { label: '4', value: 4 },
  { label: '5', value: 5 },
  { label: '6', value: 6 },
  { label: '7', value: 7 },
  { label: '8', value: 8 },
  { label: '9', value: 9 },
  { label: '10', value: 10 },
];

export default function CartItem({ item, updateCart, removeItem }) {
  return (
    <div className='cart-item'>
      <div className='cart-item__info'>
        <img src={item.url} alt='' className='cart-item__img' />
        <div className='cart-item__description'>
          <h4 className='cart-item__title'>{item.title}</h4>
          <div className='cart-item__info-price'>
            <Price originalPrice={item.originalPrice} salePrice={item.salePrice} />
          </div>
          <button className='cart-item__remove-btn' onClick={() => removeItem(item)}>
            Remove
          </button>
        </div>
      </div>
      <div className='cart-item__quantity'>
        <Select
          options={selectOptions}
          className='cart-item__quantity-select'
          defaultValue={{ label: item.quantity, value: item.quantity }}
          onChange={(e) => updateCart(item, e.value)}
        />
      </div>
      <div className='cart-item__price'>
        <span>${formatPrice((item.salePrice || item.originalPrice) * item.quantity)}</span>
      </div>
    </div>
  );
}
