import React from 'react';
import sublinks from '../data';
import { useStrapiContext } from '../hooks/useStrapiContext';

const Navlinks = () => {
    const {setPageId} = useStrapiContext();
    return (
        <div className="nav-links">
            {sublinks.map(link => {
                const {page, pageId} = link;
                return (
                    <button className='nav-link' key={pageId} onMouseEnter={() => setPageId(pageId)}>
                        {page}
                    </button>)
            })}
        </div>
    );
};

export default Navlinks;