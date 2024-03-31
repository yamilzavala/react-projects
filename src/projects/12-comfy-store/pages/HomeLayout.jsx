import React from 'react';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <>
            <nav style={{position: 'static'}}>
                <span className='text-4xl text-primary'>Comfy</span>
            </nav>  

            <section className='align-element py-20'>
                <Outlet/>        
            </section>      
        </>
    );
};

export default HomeLayout;