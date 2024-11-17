import { createStore } from "redux";
import { rootReducer } from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import shopReducer from '../Service/reducers/shoppingReducer'
const store = createStore(rootReducer)

// const store = configureStore({
//     reducer: {
//         shop: shopReducer,
//     }
// })
// console.log(store.getState())
export default store;