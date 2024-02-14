import React from 'react';

const Categories = ({categories, handleCategory}) => {
    const renderedCategory = categories.map(category => (
       <button className='btn' key={category} onClick={() => handleCategory(category)}>{category}</button>
    ))

    return (
        <section className='btn-container'>
            {renderedCategory}
        </section>
    );
};

export default Categories;