import { createSlice } from '@reduxjs/toolkit';

const cartInitialState={ cartIsVisible:false,
                         cartitems:[],
                         totalQuantity:0,         
                                }

const cartSlice = createSlice({
    name:'cartIsVisible',
    initialState: cartInitialState,
    reducers:{
        toggleVisible(state){
            state.cartIsVisible = !state.cartIsVisible;
        }, 
        newCartItems(state, action){
            const arr=[...state.cartitems];
            let check =false;

            state.cartitems.forEach((element,index)=>{
                if(element.id==action.payload.id){
                    check =true;
                  arr[index].quantity =  arr[index].quantity +1;
                }
            })
            if(check){
                state.cartitems=[...arr];
            }else{
                state.cartitems = [...state.cartitems,action.payload]
            }
           
            
            
        },
        removeItem(state){}
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice.reducer