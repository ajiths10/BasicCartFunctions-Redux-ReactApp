import { createSlice } from '@reduxjs/toolkit';

const cartInitialState={ cartIsVisible:false,
                         cartitems:[],  }

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
        removeItem(state,action){
            if(action.payload.quantity>1){
                state.cartitems.forEach((element,index)=>{
                    if(element.id==action.payload.id){
                        state.cartitems[index].quantity = state.cartitems[index].quantity-1;
                    }
                })
            }else{
                state.cartitems.forEach((element,index)=>{
                    if(element.id==action.payload.id){
                        console.log('hi')
                        state.cartitems.splice(index,1);
                    }
                })
            }
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice.reducer