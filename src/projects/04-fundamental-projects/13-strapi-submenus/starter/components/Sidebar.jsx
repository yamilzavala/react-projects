import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useStrapiContext } from '../hooks/useStrapiContext';
import sublinks from '../data';

const Sidebar = () => {
    const {sideBarIsOpen, closeSideBar} = useStrapiContext()

    return (
        <aside className={sideBarIsOpen ? 'sidebar show-sidebar' : 'sidebar'}>
            <div className="sidebar-container">
                <button className="close-btn" onClick={closeSideBar}>
                    <FaTimes/>
                </button>
                <div className="sidebar-links">
                    {sublinks.map(sublink => {
                        const {page, pageId, links} = sublink;
                        return (<article key={pageId}>
                            <h4>{page}</h4>
                            <div className="sidebar-sublinks">
                                {links.map(link => {
                                    const {id, label, icon, url} = link;
                                    return (
                                        <a key={id} href={url}>
                                            {icon}
                                            {label}
                                        </a>
                                    )
                                })}
                            </div>
                        </article>)
                    })}
                </div>
            </div>            
        </aside>
    );
};

export default Sidebar;