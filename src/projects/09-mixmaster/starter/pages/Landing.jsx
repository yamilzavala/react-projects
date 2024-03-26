import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CocktailList, SearchForm } from '../components';
import { toast } from 'react-toastify';
import { useQuery } from '@tanstack/react-query';
import { searchCocktailsQuery } from '../queries/searchCocktailsQuery';

const Landing = () => {
    //const {drinks, searchTerm} = useLoaderData();
    const {searchTerm} = useLoaderData();
    const {data: drinks} = useQuery(searchCocktailsQuery(searchTerm));

    return (
        <div>
            <SearchForm searchTerm={searchTerm}/>
            <CocktailList drinks={drinks}/>
        </div>
    );
};

export default Landing;