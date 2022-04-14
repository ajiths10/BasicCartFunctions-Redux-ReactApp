import { useDispatch, useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartActions } from '../../store/cartReducer';

const ProductItem = (props) => {
  const { title, price, description } = props;
  const items = useSelector(state=>state.cartReducer.cartitems)
  const dispatch = useDispatch();

  const submitbtnHandler=()=>{
    
    dispatch(cartActions.newCartItems(props))
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={submitbtnHandler} >Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
