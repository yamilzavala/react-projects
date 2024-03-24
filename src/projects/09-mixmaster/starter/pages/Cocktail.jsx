import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/CocktailPage';


const Kocktail = () => {
    const {data:{drinks}, id} = useLoaderData();
    const singleDrink = drinks[0];
    const { strDrink: name, strDrinkThumb: image, strAlcoholic: info, strGlass: glass, strInstructions: instructions} = singleDrink
    const validIngredients = Object.keys(singleDrink).filter(key => key.startsWith('strIngredient') && singleDrink[key] !== null).map(key => singleDrink[key] )

    return (
        <Wrapper>            
            <header>
                <Link className="btn" to='/'>Back to home</Link>
                <h3>{name}</h3>
            </header>
            <div className="drink">
                <img src={image} alt={name} className='img' />
                <div className="drink-info">
                    <p>
                        <span className='drink-data'> Name: </span> {name}
                    </p>
                    <p>
                        <span className='drink-data'> Info: </span> {info}
                    </p>
                    <p>
                        <span className='drink-data'> Glass: </span> {glass}
                    </p>
                    <p>
                        <span className='drink-data'> Instructions: </span> {instructions}
                    </p>
                    <p>
                        <span className='drink-data' > Ingredients: </span>
                        {validIngredients.map((ingredient, idx) => {
                            return (
                                <span className='ing' key={idx}>
                                    {ingredient} {idx < validIngredients.length - 1 ? ',' : ''}
                                </span>
                            )
                        })}
                    </p>
                </div>
            </div>
        </Wrapper>
    );
};

export default Kocktail;