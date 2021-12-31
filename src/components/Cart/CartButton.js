import { useSelector } from 'react-redux';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const totalCartItems = useSelector(state => state.items.totalUnits)
  return (
    <button onClick={props.clickHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalCartItems}</span>
    </button>
  );
};

export default CartButton;
