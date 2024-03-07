import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { useCartContext } from '../hooks/useCartContext';
const CartItem = ({ id, img, title, price, amount }) => {
  const cartItem = { id, img, title, price, amount };
  const {removeItemToCart, increaseItem, decreaseItem, totalItem} = useCartContext();

  let totalItemsInCar = 0;
  totalItem.forEach(item => {
    if(item.id === id) {
      totalItemsInCar += 1;
    }
  })

  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h5>{title}</h5>
        <span className='item-price'>${price}</span>
        {/* remove button */}
        <button className='remove-btn' onClick={() => removeItemToCart(id)}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className='amount-btn' onClick={() => increaseItem(cartItem)}>
          <FaChevronUp className='amount-icon' />
        </button>
        {/* amount */}
        <span className='amount'>{totalItemsInCar}</span>
        {/* decrease amount */}
        <button className='amount-btn' onClick={() => decreaseItem(cartItem)}>
          <FaChevronDown className='amount-icon' />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
