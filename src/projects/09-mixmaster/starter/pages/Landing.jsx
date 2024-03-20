import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Landing = () => {
    const {drinks, searchTerm} = useLoaderData();
    console.log('drinks: ', drinks);
    console.log('searchTerm: ', searchTerm);

    return (
        <div>
            <h3>Landing</h3>
        </div>
    );
};

export default Landing;