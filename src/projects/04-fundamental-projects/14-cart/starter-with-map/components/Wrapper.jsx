import React from 'react';
import { useCartContext } from '../hooks/useCartContext';
import Navbar from './Navbar';
import CartContainer from './CartContainer';

const Wrapper = () => {
    const {loading} = useCartContext()

    if(loading) {
        return (
            <main>
              <div className='loading' style={{ marginTop: '6rem' }}></div>
            </main>
          );
    }

    return (
        <>
          <main className="container-center">
            <Navbar />
            <CartContainer />
      </main>    
        </>
    );
};

export default Wrapper;