import React from 'react';
import './backroads.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Tours from './components/Tours';
import About from './components/About';
import Footer from './components/Footer';
const AppBackroads = () => {
    return (
        <>
            <Navbar/>
            <Hero/>
            <About/>
            <Services/>
            <Tours/>
            <Footer/>
        </>
    );
};

export default AppBackroads;