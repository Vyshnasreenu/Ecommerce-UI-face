import { configureStore } from "@reduxjs/toolkit";
import shopingReducer from "../Service/reducers/shoppingSlices";
// const store = createStore(rootReducer);

const store = configureStore({
  reducer: {
    shop: shopingReducer,
  },
});
// console.log(store.getState())
export default store;
