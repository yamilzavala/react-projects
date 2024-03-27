import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../../../cartItems";

const initialState = {
    cartItems: cartItems,
    amount: 4,
    total: 0,
    isLoading: true
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = []
            state.amount = 0;
            state.total = 0;
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter(item => item.id !== itemId)
        },
        increase: (state, {payload}) => {
            const item = state.cartItems.find(item => item.id === payload)
            item.amount = item.amount + 1;
        },
        decrease: (state, {payload}) => {
            const item = state.cartItems.find(item => item.id === payload)
            item.amount = item.amount - 1;
        },
    }
})

console.log('cartSlice: ', cartSlice)

export const {clearCart, removeItem, increase, decrease} =  cartSlice.actions;
export default cartSlice.reducer;