import axios from "axios";

const cocktailSearchUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const searchCocktailsQuery = (searchTerm) => {
    const searchTermValue = searchTerm || 'all';
    return {
        queryKey: ['search', searchTerm || 'all'],
        queryFn: async () => {
            const response = await axios.get(`${cocktailSearchUrl}${searchTermValue}`);
            console.log('response reactQuery: ', response)
            return response.data.drinks
        }
    }
}