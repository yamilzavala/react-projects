import { INCREASE_ITEM, DECREASE_ITEM, REMOVE_ITEM, CLEAR_ALL, LOADING, DISPLAY_DATA } from './actions';

const cartReducer = (state, action) => {
    if(action.type === INCREASE_ITEM) {     
        const newState = new Map(state.cart);
        const item = newState.get(action.payload.id);
        const newItem = {...item, amount: item.amount + 1}
        newState.set(action.payload.id, newItem)
        return {
            ...state,
            cart: newState
        }
    } else if(action.type === DECREASE_ITEM) {
        const newState = new Map(state.cart);
        const item = newState.get(action.payload.id);

        if(item.amount === 1) {
            newState.delete(action.payload.id);
            return {
                ...state,
                cart: newState
            }
        }

        const newItem = {...item, amount: item.amount - 1}
        newState.set(action.payload.id, newItem)
        return {
            ...state,
            cart: newState
        }
    }     
    else if(action.type === REMOVE_ITEM) {
        const newState = new Map(state.cart);
        newState.delete(action.payload.id)
        return {
            ...state,
            cart: newState
        }
    } else if(action.type === CLEAR_ALL) {
        return {
            ...state,
            cart: new Map()
        }
    } else if(action.type === LOADING) {
        return {
           ...state,
           loading: true
        }
    } else if(action.type === DISPLAY_DATA) {
        console.log('===action===: ', action)
        const newState = new Map(action.payload.data.map(item => [item.id, item]))
        return {
           ...state,
           loading: action.payload.loading,
           cart: newState
        }
    }

    return state;
}

export default cartReducer;