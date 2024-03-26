import axios from "axios";
import { searchCocktailsQuery } from "../../queries/searchCocktailsQuery";

const cocktailSearchUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const loaderGetDrink = (queryClient) => async ({request}) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get('search' || '');   
    await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm))
    //const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
    //return ({drinks: response.data.drinks, searchTerm})   
    return {searchTerm}   
};

export default loaderGetDrink;