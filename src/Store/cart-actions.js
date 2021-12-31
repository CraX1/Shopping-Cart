import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending..",
        message: "sending cart data!",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://addtask-http-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({items:cart.items, totalUnits:cart.totalUnits}),
        }
      );

      if (!response.ok) {
        throw new Error("sending cart data failed");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Sending cart data successful!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "sending cart data failed!",
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    
    const fetchRequest = async () => {
      const response = await fetch(
        "https://addtask-http-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("Unable to fetch data!");
      }
      const data = await response.json();
      return data;
    };

    try {
      const cartData=await fetchRequest();
      dispatch(cartActions.replaceCart({ 
          items:cartData.items || [], 
          totalUnits:cartData.totalUnits
      }))
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};