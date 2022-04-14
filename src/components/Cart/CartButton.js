import { useDispatch , useSelector} from 'react-redux';

import { cartActions } from '../../store/cartReducer';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const items = useSelector(state=>state.cartReducer.cartitems);
  const dispatch =useDispatch();
  const cartBtnHandler=()=>{
    dispatch(cartActions.toggleVisible());
  };
  

  return (
    <button className={classes.button} onClick={cartBtnHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{items.length}</span>
    </button>
  );
};

export default CartButton;
