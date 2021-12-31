import { useDispatch } from 'react-redux';
import { cartActions } from '../../Store/cart-slice';
import classes from './CartItem.module.css';


const CartItem = (props) => {
  const { title, quantity, overallPrice, price,id } = props.item;
  const dispatch = useDispatch()

  const increaseQuantity=()=>{
    dispatch(cartActions.addItemToCart({title,overallPrice,price,quantity,id}))
  }
  const decreaseQuantity=()=>{
    dispatch(cartActions.removeItemFromCart(id))
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${overallPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={increaseQuantity}>+</button>
          <button onClick={decreaseQuantity}>-</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
