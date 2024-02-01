import React from 'react';
import { pageLinks, socialLinks } from '../data';

const Footer = () => {

    const renderedLinks = pageLinks.map(page => (
        <li key={page.id}>
            <a href={page.href} className="footer-link">{page.text}</a>
        </li>
    ))

    const renderedSocial = socialLinks.map(social => (
        <li key={social.id}>
           <a href={social.href} rel="noreferrer" target="_blank" className="footer-icon"><i className={social.icon}></i></a>
        </li>
    ))



    return (
        <footer className="section footer">
            <ul className="footer-links">
               {renderedLinks}
            </ul>

            <ul className="footer-icons">
               {renderedSocial}
            </ul>
            
            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date">{new Date().getFullYear()}</span> all rights reserved
            </p>
        </footer>
    );
};

export default Footer;