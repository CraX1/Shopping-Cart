import { createSlice } from "@reduxjs/toolkit";

const initialCart = {
  items: [],
  totalUnits: 0,
  changed:false
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCart,
  reducers: {
    replaceCart:(state,action)=>{
      state.totalUnits=action.payload.totalUnits;
      state.items=action.payload.items
    },

    addItemToCart: (state, action) => {
      state.changed=true
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === newItem.id
      );
      const existingItem = state.items[existingItemIndex];
      state.totalUnits++;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          overallPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.overallPrice += newItem.price;
      }
    },
    removeItemFromCart: (state, action) => {
      state.changed=true
      const removeItemId = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === removeItemId
      );
      const existingItem = state.items[existingItemIndex];
      state.totalUnits--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => {
          return item.id !== removeItemId;
        });
      } else {
        existingItem.quantity--;
        existingItem.overallPrice -= existingItem.price;
      }
    },
  },
});


export const cartActions = cartSlice.actions;

export default cartSlice.reducer;