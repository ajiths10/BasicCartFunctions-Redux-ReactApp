import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const items = useSelector((state) => state.cartReducer.cartitems);
  let total = 0;

items.map((element)=>{
  total= total +(element.price*element.quantity )
})


  const itemsList = items.map((element) => {
    return (
      <CartItem
        title={element.title}
        price={element.price}
        description={element.description}
        quantity={element.quantity}
        id={element.id}
      />
    );
  });

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{itemsList}</ul>
      <div>Total: {total.toFixed(2)}</div>
    </Card>
  );
};

export default Cart;
