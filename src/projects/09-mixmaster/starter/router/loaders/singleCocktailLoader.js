import axios from "axios";

const cocktailDetailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const getCocktailDetail = async ({params}) => {
    const {id} = params;
    const {data} = await axios.get(`${cocktailDetailUrl}${id}`)
    return {data, id};
}

export default getCocktailDetail;