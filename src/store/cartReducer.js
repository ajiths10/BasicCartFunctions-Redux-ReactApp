import { createSlice } from '@reduxjs/toolkit';

const cartInitialState={ cartIsVisible:false }

const cartSlice = createSlice({
    name:'cartIsVisible',
    initialState: cartInitialState,
    reducers:{
        toggleVisible(state){
            state.cartIsVisible = !state.cartIsVisible;
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice.reducer