import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import { Navbar } from '../components';

const HomeLayout = () => {
    const navigation = useNavigation()
    const isPageLoading = navigation.state === 'loading';
    const valuesToShareByRouter = {
        value: 'some value...'
    }
    return (
        <>
            <Navbar/>
            <section className="page">
                {isPageLoading ? <div className="loading"/> : <Outlet context={valuesToShareByRouter}/> }                  
            </section>
        </>
    );
};

export default HomeLayout;