import { useCartContext } from '../hooks/useCartContext';
import CartItem from './CartItem';
// import cartItems from '../data';
const CartContainer = () => {
  // const cartArray = [...cartItems];
  const {cartItems: cartArray, clearCart, totalItem} = useCartContext()
  const total = totalItem.reduce((acc, curr) => acc + Number(curr.price), 0);
 
  //console.log('prices: ', totalItem)

  console.log('==cartArray==: ', cartArray)

  if (totalItem.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cartArray.map((cartItem) => {
          return <CartItem key={cartItem.id} {...cartItem} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className='cart-total'>
            total <span>${total.toFixed(2)}</span>
          </h5>
        </div>
        <button
          className='btn btn-hipster'
          onClick={clearCart}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
