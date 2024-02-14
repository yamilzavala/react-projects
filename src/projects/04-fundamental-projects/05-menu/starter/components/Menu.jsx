import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({menuItems}) => {

    const renderedItems = menuItems.map(item => (
        <MenuItem key={item.id} {...item} />
    ))

    return (
        <div className='section-center'>
            {renderedItems}
        </div>
    );
};

export default Menu;