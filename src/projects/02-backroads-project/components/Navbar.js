import React from 'react';
import logo from '../images/logo.svg'
import { pageLinks, socialLinks } from '../data';
const Navbar = () => {

    const renderedPageLinks = pageLinks.map((page,idx) => (
        <li key={page.id}>
            <a href={page.href} className="nav-link"> {page.text} </a>
        </li>
    ))

    const renderedSocialLinks = socialLinks.map((social, idx) => (
        <li key={social.id}>
            <a href={social.href} rel="noreferrer" target="_blank" className="nav-icon"><i className={social.icon}></i></a>
        </li>
    ))

    return (
        <nav className="navbar">
        <div className="nav-center">
            <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
                <i className="fas fa-bars"></i>
            </button>
            </div>
            
            <ul className="nav-links" id="nav-links">
                {renderedPageLinks}
            </ul>

            <ul className="nav-icons">
                {renderedSocialLinks}
            </ul>
        </div>
    </nav>
    );
};

export default Navbar;