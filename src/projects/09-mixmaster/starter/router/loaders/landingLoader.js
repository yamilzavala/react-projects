import axios from "axios";

const cocktailSearchUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const loaderGetDrink = async () => {
    const searchTerm = 'margarita';   
    const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
    return ({drinks: response.data.drinks, searchTerm})   
};

export default loaderGetDrink;