import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CocktailList } from '../components';

const Landing = () => {
    const {drinks, searchTerm} = useLoaderData();

    return (
        <div>
            <CocktailList drinks={drinks}/>
        </div>
    );
};

export default Landing;