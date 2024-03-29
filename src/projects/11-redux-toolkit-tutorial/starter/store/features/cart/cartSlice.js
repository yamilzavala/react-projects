import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../../../cartItems";
import axios from "axios";

const url = 'https://course-api.com/react-useReducer-cart-project';

export const getCartItems = createAsyncThunk('cart/getCartItems',async (thunkAPI) => {
    // return fetch(url)
    //     .then(response => response.json())
    //     .catch(error => console.log(error))
    try {
        const resp = await axios.get(url);
        return resp.data;
    } catch (error) {
        return thunkAPI.rejectWithValue('something went wrong')
    }

})

const initialState = {
    //cartItems: cartItems,
    cartItems: [],
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
        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.amount = cartItem.amount + 1;
        },
        decrease: (state, {payload}) => {
            const item = state.cartItems.find(item => item.id === payload.id)
            item.amount = item.amount - 1;
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
              amount += item.amount;
              total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
          },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCartItems.pending,  (state) => {
                state.isLoading = true
            })
            .addCase(getCartItems.fulfilled,  (state, action) => {
                console.log('action getCartItems.fulfilled: ', action);
                state.cartItems = action.payload;
                state.isLoading = false;
            })
            .addCase(getCartItems.rejected,  (state, action) => {
                console.log('action getCartItems.rejected: ', action)
                state.isLoading = false;
            })
    } 
})

console.log('cartSlice: ', cartSlice)

export const {clearCart, removeItem, increase, decrease, calculateTotals} =  cartSlice.actions;
export default cartSlice.reducer;