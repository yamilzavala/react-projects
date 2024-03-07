import { createContext, useReducer } from "react";
import data from '../data';
import reducer from '../store/reducer'
import { INCREASE_ITEM, DECREASE_ITEM, REMOVE_ITEM, CLEAR_ALL } from '../store/actions';

const defaultValues = {
    cartItems: data,
    totalItem: [...data.slice(0,2)]    
}

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, defaultValues);

    const increaseItem = (item) => {
        dispatch({type: INCREASE_ITEM, payload: {item}})
    }
    const decreaseItem = (item) => {
        dispatch({type: DECREASE_ITEM, payload: {item}})
    }

    const removeItem = (id) => {
        dispatch({type: REMOVE_ITEM, payload: {id}})
    }

    const clearCart = () => {
        dispatch({type: CLEAR_ALL})
    }

    const valuesToShare = {
        cartItems: state.cartItems,
        totalItem: state.totalItem,
        increaseItem,
        decreaseItem,
        removeItem,
        clearCart
    };

    return (
        <CartContext.Provider value={valuesToShare}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;