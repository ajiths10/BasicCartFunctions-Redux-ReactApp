import { useDispatch } from 'react-redux';

import { cartActions } from '../../store/cartReducer';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch =useDispatch();
  const cartBtnHandler=()=>{
    dispatch(cartActions.toggleVisible());
  };

  return (
    <button className={classes.button} onClick={cartBtnHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
