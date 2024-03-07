import { FaCartPlus } from 'react-icons/fa';
import { useCartContext } from '../hooks/useCartContext';
const Navbar = () => {
  const {totalItem} = useCartContext();

  return (
    <nav>
      <div className='nav-center'>
        <h4>useReducer</h4>
        <div className='nav-container'>
          <FaCartPlus className='cart-icon' />
          <div className='amount-container'>
            <p className='total-amount'>{totalItem.length}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
