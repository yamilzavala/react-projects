import axios from "axios";

const cocktailDetailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export const singleCocktailQuery = (id) => {
    return {
        queryKey: ['coacktail', id],
        queryFn: async () => {
            const {data} = await axios.get(`${cocktailDetailUrl}${id}`)
            return data 
        }
    }
}