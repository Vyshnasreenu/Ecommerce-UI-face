// import * as actionTypes from './constrainsTypes'

import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  cartList: [],
  itemIncreament: 0,
  currentItem: {},
  prodcutDetails: {},
  isChecking: false,
  default: "/productsStore"
};

const SELECTED_PRODUCT_INFO = {
  prodcutDetails: {},
  numberOfQuantity: 1,
  priceOfProduct: null,
};

// --------------Shopping Redcuer------------
const addshopcart = (state, action) => {
  if (state.cartList.length > 0) {
    const isExecute = state.cartList?.find((item) => item.id === action.payload.id) // finding the product is already exit or not
    if (!isExecute) {
      state.itemIncreament = ++state.itemIncreament
      state.cartList?.push(action.payload)
    }
    else {
      return
    }
  } else {
    state.cartList?.push(action.payload)
    state.itemIncreament = ++state.itemIncreament
  }
};

const removeShopCart = (state, action) => {
  return {
    ...state, cartList: state.cartList.filter((item) => item.id !== action.payload.id), itemIncreament: state?.itemIncreament - 1
  }
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
    ...state,
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
    addToCart: (state, action) => addshopcart(state, action),
    removeCart: (state, action) => removeShopCart(state, action),
    viewProductDet: (state, action) => viewProduct(state, action),
    updateInitialState: (state, action) => ({ ...state, ...action.payload }),
    returnToDashboard: (state, action) => ({ ...state, default: action.payload })
  },
})

export const { addToCart, removeCart, viewProductDet, updateInitialState } = shoppingSlice.actions;

// export default viewProductSlice.reducer;
export default shoppingSlice.reducer;
