import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import { openModal } from '../store/features/modal/modalSlice';
import { getCartItems } from '../store/features/cart/cartSlice';


const CartContainer = () => {
    const {amount, total, cartItems} = useSelector(state => state.cart);
    const dispatch = useDispatch()

    if (amount < 1) return (
        <section className='cart'>
          {/* cart header */}
          <header>
            <h2>your bag</h2>
            <h4 className='empty-cart'>is currently empty</h4>
            <button style={{textAlign: 'center'}} onClick={() => dispatch(getCartItems())} className='btn btn-block'>reload</button>
          </header>
      </section>
    )

    return (
        <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
       {cartItems.map(item => (<CartItem key={item.id} {...item} />))}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button onClick={() => dispatch(openModal())} className='btn clear-btn'>clear cart</button>
      </footer>
    </section>
    );
};

export default CartContainer;