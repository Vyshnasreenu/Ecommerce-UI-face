// import * as actionTypes from './constrainsTypes'

import { createSlice } from "@reduxjs/toolkit";
import { ADD_TO_CART, REMOVE_TO_CART, VIEW_CART } from "../constrainsTypes";

const INITIAL_STATE = {
  cartList: [],
  itemIncreament: 0,
  currentItem: {},
  prodcutDetails: {},
};

const SELECTED_PRODUCT_INFO = {
  prodcutDetails: {},
  numberOfQuantity: 1,
  priceOfProduct: null,
};

// --------------Shopping Redcuer------------
const addshopcart = (state, data) => {
  const updatedState = {
    ...state,
    cartList: [...state.cartList, data],
    itemIncreament: state.itemIncreament + 1,
  };
  return updatedState;
};

const removeShopCart = (state, data) => {
  const index = state.cartList.findIndex((item) => item.id === data.id);
  if (index === -1) return state;
  const updatedState = [...state.cartList];
  updatedState.splice(index, 1);
  return {
    ...state,
    cartList: updatedState,
    itemIncreament: state.itemIncreament - 1,
  };
};

// export const shopReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       return addshopcart(state, action.payload);
//     case REMOVE_TO_CART:
//       return removeShopCart(state, action.payload);
//     default:
//       return state;
//   }
// };
// -------------------------------------------------------

// -------------------selected product details----------------//

const viewProduct = (state, action) => {
  const updatedState = {
    prodcutDetails: action.payload,
  };
  localStorage.setItem("product", JSON.stringify(action.payload))
  return updatedState;
};

// export const selectProductReducer = (state = SELECTED_PRODUCT_INFO, action) => {
//   switch (action.type) {
//     case VIEW_CART:
//       return viewProduct(state, action.payload);
//     default: {
//       return state;
//     }
//   }
// };


const shoppingSlice = createSlice({
  name: "ShoppingSlice",
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state) => addshopcart(state),
    removeCart: (state) => removeShopCart(state),
    viewProductDet: (state, action) => viewProduct(state, action),
  },
})

export const { addToCart, removeCart, viewProductDet } = shoppingSlice.actions;

// export default viewProductSlice.reducer;
export default shoppingSlice.reducer;
