import { NotificationActions } from "./ui";
import { cartActions } from "./cartReducer";

export const dataFetch = () =>{

    return async(dispatch)=>{
        const fetchData = async()=>{
            const res = await fetch('https://cartbasicfunctions-default-rtdb.firebaseio.com/cart.json');
            if(!res.ok){
                throw new Error('Error tetching data!')
            }
            const data = await res.json();
            console.log(res)
            return data
        }
        try{
           const cartData = await fetchData();
           console.log(cartData);
           cartData.map((element)=>{
               dispatch(cartActions.newCartItems(element))
           })
        }catch(err){
            dispatch( NotificationActions.setIsError(true));
            console.log(`Error tetching data! -- ${err}`);
        }
    }
}