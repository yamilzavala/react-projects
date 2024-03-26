import React from 'react';
import CocktailCard from './CocktailCard';
import Wrapper from '../assets/wrappers/CocktailList';
import { useOutletContext } from 'react-router-dom';

const CocktailList = ({drinks}) => {
    const data = useOutletContext()

    let formttedDrinks = [];
    if(drinks) {
        formttedDrinks = drinks.map(drink => {
            const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = drink;
            return {
                id: idDrink, name: strDrink, image: strDrinkThumb, info: strAlcoholic, glass: strGlass
            }
        })
    }

    return (
       <Wrapper>
            {formttedDrinks.map(drink => {
                return <CocktailCard key={drink.id} {...drink}/>
            })}
       </Wrapper>
    );
};

export default CocktailList;