import { combineReducers } from "redux";
import { combineSlices } from "@reduxjs/toolkit";
import { selectProductReducer, shopReducer } from "../Service/reducers/shoppingReducer";

export const rootReducer = combineReducers({
    shop: shopReducer,
    details: selectProductReducer,
})