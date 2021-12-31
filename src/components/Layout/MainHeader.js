import CartButton from "../Cart/CartButton";
import { useDispatch } from "react-redux";
import classes from "./MainHeader.module.css";
import { uiActions } from "../../Store/ui-slice";

const MainHeader = (props) => {
  const dispatch = useDispatch();
  const showCartHandler = () => {
    dispatch(uiActions.toggleVisibility());
  };
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton clickHandler={showCartHandler} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
