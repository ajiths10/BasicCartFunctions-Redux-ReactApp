import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const isCart = useSelector(state=>state.cartReducer.cartIsVisible);
const data = useSelector(state=>state.cartReducer.cartitems);
console.log(data);


  return (
    <Layout>
      {isCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
