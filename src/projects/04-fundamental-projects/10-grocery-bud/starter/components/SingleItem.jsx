import React from 'react';

const SingleItem = ({item,removeItem,editItem}) => {
    return (
        <article className='single-item'>
            <input type="checkbox" onChange={() => editItem(item.id)} />
            <p style={{textTransform: 'capitalize', textDecoration: item.completed && 'line-through'}}>{item.name}</p>
            <button className='btn remove-btn' onClick={() => removeItem(item.id)}>Remove Item</button>
        </article>
    );
};

export default SingleItem;