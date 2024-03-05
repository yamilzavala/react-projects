import React from 'react';
import { IoMdClose } from "react-icons/io";
import { useContextSidebar } from '../hooks/useContextSidebar';
import {links, social} from '../data';
import logo from '../logo.svg'
const Sidebar = () => {
    const {closeSidebar, sidebarIsOpen} = useContextSidebar();
    return (
        <aside className={sidebarIsOpen ? 'sidebar-overlay show-sidebar' : 'sidebar-overlay'}>  
            <div className="sidebar-header">
                <img className='logo' src={logo} alt="logo" />
                <button className='sidebar-close-btn' onClick={closeSidebar}>
                    <IoMdClose/>            
                </button>     
            </div>     
           
            <ul className='links'>
                    {links.map(link => {
                        const {url, text, icon, id} = link;
                        return <li key={id}>                           
                            <a href={url}>
                                {icon}
                                {text}
                            </a>
                        </li>
                    })}
            </ul>            
            
            <ul className='social-links'>
                    {links.map(social => {
                        const {url, icon, id} = social;
                        return <li key={id}>                           
                           <a href={url}>
                                {icon}
                           </a>
                        </li>
                    })}
            </ul>
           
        </aside>
    );
};

export default Sidebar;