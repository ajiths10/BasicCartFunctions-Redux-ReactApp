import { createSlice } from '@reduxjs/toolkit';

const cartInitialState={ cartIsVisible:false,
                         cartitems:[],   
                                }

const cartSlice = createSlice({
    name:'cartIsVisible',
    initialState: cartInitialState,
    reducers:{
        toggleVisible(state){
            state.cartIsVisible = !state.cartIsVisible;
        }, 
        newCartItems(state, action){
            state.cartitems = [...state.cartitems,action.payload]
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice.reducer