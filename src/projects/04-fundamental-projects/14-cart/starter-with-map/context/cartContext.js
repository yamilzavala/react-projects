import { createContext, useReducer, useEffect } from "react";
//import data from '../data';
import reducer from '../store/reducer'
import { INCREASE_ITEM, DECREASE_ITEM, REMOVE_ITEM, CLEAR_ALL, LOADING, DISPLAY_DATA } from '../store/actions';
//import { UseFetchData } from "../hooks/useFetch";
import { getTotals } from "../utils/getTotals";


const defaultValues = {
    loading: false,
    cart: new Map()    
}

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, defaultValues);
    const {totalAmount, totalCost} = getTotals(state.cart);

    console.log('totalAmount, totalCost', totalAmount, totalCost)

    const fetchData = async () => {
        try {
            dispatch({type: LOADING});
            const response = await fetch('https://www.course-api.com/react-useReducer-cart-project');
            const data = await response.json();
            dispatch({type: DISPLAY_DATA, payload: {data}})
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData();
    },[])

    const increaseItem = (id) => {
        dispatch({type: INCREASE_ITEM, payload: {id}})
    }
    const decreaseItem = (id) => {
        dispatch({type: DECREASE_ITEM, payload: {id}})
    }

    const removeItem = (id) => {
        dispatch({type: REMOVE_ITEM, payload: {id}})
    }

    const clearCart = () => {
        dispatch({type: CLEAR_ALL})
    }

    const valuesToShare = {
        totalAmount,
        totalCost,
        increaseItem,
        decreaseItem,
        removeItem,
        clearCart,
        cartItems: state.cart
    };

    return (
        <CartContext.Provider value={valuesToShare}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;