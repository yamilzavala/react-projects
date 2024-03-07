import './indexCart.css';
// components
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import CartContextProvider from './context/cartContext';

function AppCartWithArray() {
  return (
    <CartContextProvider>
      <main className="container-center">
        <Navbar />
        <CartContainer />
      </main>
    </CartContextProvider>
  );
}

export default AppCartWithArray;
