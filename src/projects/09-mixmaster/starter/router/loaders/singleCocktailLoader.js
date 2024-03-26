//import axios from "axios";
import { singleCocktailQuery } from "../../queries/singleCocktailQuery";

//const cocktailDetailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const getCocktailDetail = (queryClient) => async ({params}) => {
    const {id} = params;
    //const {data} = await axios.get(`${cocktailDetailUrl}${id}`)
    await queryClient.ensureQueryData(singleCocktailQuery(id))
    //return {data, id};
    return {id};
}

export default getCocktailDetail;