import './indexCart.css';
// components
import CartContextProvider from './context/cartContext';
import Wrapper from './components/Wrapper';

function AppCartWithMap() {

  return (
    <CartContextProvider>
      <Wrapper/>
    </CartContextProvider>
  );
}

export default AppCartWithMap;
