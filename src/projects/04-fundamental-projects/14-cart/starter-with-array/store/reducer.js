import { INCREASE_ITEM, DECREASE_ITEM, REMOVE_ITEM, CLEAR_ALL } from './actions';

const cartReducer = (state, action) => {
    if(action.type === INCREASE_ITEM) {
        console.log('totalItem: ', state.totalItem)
        return {
            ...state,
            totalItem: [...state.totalItem, action.payload.item]
        }        
    } else if(action.type === DECREASE_ITEM) {
        const itemIdx = state.totalItem.findIndex(item => item.id === action.payload.item.id);
        console.log('itemIdx: ',itemIdx)
        if(itemIdx > -1) {
            const newItems = state.totalItem.slice(0, itemIdx).concat(state.totalItem.slice(itemIdx + 1));
            return {
                ...state,
                totalItem: [...newItems]
            }
        }
        return state;
    }     
    else if(action.type === REMOVE_ITEM) {
        const newItems = state.cartItems.filter(item => item.id !== action.payload.id);
        return {
            ...state,
            cartItems: [...newItems]
        }
    } else if(action.type === CLEAR_ALL) {
        return {
            totalItem: [],
            cartItems: []
        }
    }

    return state;
}

export default cartReducer;