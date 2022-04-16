import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { NotificationActions } from './store/ui';
import { dataFetch } from './store/cartFetcher';

let init = true;

function App() {
  const isCart = useSelector(state=>state.cartReducer.cartIsVisible);
  const data = useSelector(state=>state.cartReducer.cartitems);
  const cart = useSelector((state=>state.cartReducer.cartitems))
  const dispatch = useDispatch();

  useEffect(()=>{

    if(init){
       init = false;
       return 
      }
      

    dispatch(NotificationActions.setIsError(false));
    dispatch(NotificationActions.setIsSuccess(false));
    dispatch(NotificationActions.setIsLoding(true));
    fetch('https://cartbasicfunctions-default-rtdb.firebaseio.com/cart.json', 
    {
      method: 'PUT',
      body:JSON.stringify(cart),
    }).then((res)=>{
      if(res.ok){
        dispatch(NotificationActions.setIsLoding(false));
        dispatch(NotificationActions.setIsSuccess(true));
      }
    }).catch((err)=>{
      dispatch(NotificationActions.setIsLoding(false));
      dispatch(NotificationActions.setIsSuccess(false));
      dispatch(NotificationActions.setIsError(true));
    })

  },[cart,dispatch]);

  useEffect(()=>{
    setTimeout(() => {
      dispatch(NotificationActions.setIsError(false));
    dispatch(NotificationActions.setIsSuccess(false));
    dispatch(NotificationActions.setIsLoding(false));
    }, 2000);
  },[cart])

  useEffect(()=>{dispatch(dataFetch())},[])

console.log('hi');
  return (
    <Layout>
      {isCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
