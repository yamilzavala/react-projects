import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useContextSidebar } from '../hooks/useContextSidebar';

const Home = () => {
    const {openModal, openSidebar} = useContextSidebar(); 

    return (
        <main>
           <button className='sibebar-toggle' onClick={openSidebar}>
                <FaBars />
           </button>
           <button className='btn' onClick={openModal}>
                open modal
            </button>
        </main>
    );
};

export default Home;