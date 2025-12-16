import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: localStorage.getItem("carts")
    ? JSON.parse(localStorage.getItem("carts"))
    : [],
  statusTab: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToMainCart(state, action) {
      const { productId, quantity } = action.payload;

      const indexProductId = state.items.findIndex(
        (item) => item.productId === productId
      );
      if (indexProductId >= 0) {
        state.items[indexProductId].quantity += quantity;
      } else {
        state.items.push({ productId, quantity });
      }
      localStorage.setItem("carts", JSON.stringify(state.items));
    },
    removefromMainCart(state, action) {
      const { productId, quantity } = action.payload;

      const indexProductId = state.items.findIndex(
        (item) => item.productId === productId
      );

      if (indexProductId >= 0) {
        state.items.splice(indexProductId, 1);
      }
      localStorage.setItem("carts", JSON.stringify(state.items));
    },
    clearAllCartItems(state) {
      state.items = [];
      localStorage.setItem("carts", JSON.stringify(state.items));
    },
    toggleStatusTab(state) {
      if (state.statusTab === false) {
        state.statusTab = true;
      } else {
        state.statusTab = false;
      }
    },
    falseStatusTab(state, action) {
      if (typeof action.payload === "boolean") {
        state.statusTab = action.payload;
      } else {
        state.statusTab = !state.statusTab;
      }
    },
  },
});
export const {
  addToMainCart,
  removefromMainCart,
  toggleStatusTab,
  clearAllCartItems,
  falseStatusTab,
} = cartSlice.actions;
export default cartSlice.reducer;
