import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import './indexReduxToolkit.css';
import { useEffect } from 'react';
import { calculateTotals, getCartItems } from './store/features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './components/Modal';


function AppReduxToolkit() {
 const {cartItems, isLoading} = useSelector(state => state.cart)
 const {isOpen} = useSelector(state => state.modal)
 const dispatch = useDispatch();

useEffect(() => {
  dispatch(getCartItems())
},[])

 useEffect(() => {
  dispatch(calculateTotals())
 },[cartItems])

 if (isLoading) {
  return (
    <div className='loading'>
    </div>
  );
}

  return (
    <main>
      <Navbar/>
      <CartContainer/>
      {isOpen && <Modal/>}
    </main>
  )
}

export default AppReduxToolkit;
