import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cartActions } from '../../store/cartReducer';

const CartItem = (props) => {
  const dispatch = useDispatch();

const plushandler=()=>{
  dispatch(cartActions.newCartItems(props))
}

const minushandler=()=>{
  dispatch(cartActions.removeItem(props))
}


  return (
    <li className={classes.item}>
      <header>
        <h3>{props.title}</h3>
        <div className={classes.price}>
          <span className={classes.itemprice}>(${props.price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{props.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={minushandler}>-</button>
          <button onClick={plushandler} >+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
