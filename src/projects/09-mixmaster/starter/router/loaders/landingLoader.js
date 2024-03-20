import axios from "axios";

const cocktailSearchUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loaderGetDrink = async () => {
    const searchTerm = 'margarita';
    try {
        const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
        return ({drinks: response.data.drinks, searchTerm})
    } catch (error) {
        console.error('Error fetching drinks: ', error)
    }
};