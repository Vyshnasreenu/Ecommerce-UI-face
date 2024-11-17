// import * as actionTypes from './constrainsTypes'

import { createSlice } from "@reduxjs/toolkit"
import { ADD_TO_CART, REMOVE_TO_CART, VIEW_CART } from "../constrainsTypes"


const INITIAL_STATE = {
    // productsList: [
    //     {
    //         id: "1",
    //         image: "/images/Mobiles/Samsung S23.png",
    //         name: "SamSung Galaxy S23",
    //         price: "90000",
    //         description: "This samsung galaxy take pictures good quality"
    //     },

    //     {
    //         id: "2",
    //         name: "iPhone 14 Pro",
    //         image: "/images/Mobiles/Iphone 15.png",
    //         price: "120000",
    //         description: "Apple iPhone 14 Pro with advanced camera features and A16 Bionic chip."
    //     },
    //     {
    //         id: "3",
    //         name: "Google Pixel 7",
    //         image: "/images/Mobiles/Google pi7.png",
    //         price: "75000",
    //         description: "Google Pixel 7 with Google’s advanced AI for exceptional photo quality and a unique design."
    //     },
    //     {
    //         id: "4",
    //         name: "OnePlus 11",
    //         image: '/images/Mobiles/OnePlus.png',
    //         price: "68000",
    //         description: "OnePlus 11 with fast performance, excellent display, and long-lasting battery."
    //     },
    //     {
    //         id: "5",
    //         name: "Xiaomi Mi 13",
    //         image: "/images/Mobiles/Mi.png",
    //         price: "55000",
    //         description: "Xiaomi Mi 13 with high-quality build, powerful performance, and impressive camera setup."
    //     },
    //     {
    //         id: "6",
    //         name: "Sony Xperia 5 IV",
    //         image: "/images/Mobiles/Sony.png",
    //         price: "80000",
    //         description: "Sony Xperia 5 IV with cinema-quality camera and smooth 120Hz OLED display."
    //     },
    //     {
    //         id: "7",
    //         name: "Huawei P50 Pro",
    //         image: "/images/Mobiles/Huawi.png",
    //         price: "85000",
    //         description: "Huawei P50 Pro with Leica cameras and a powerful Kirin 9000 processor."
    //     },
    //     {
    //         id: "8",
    //         name: "Realme GT 3",
    //         image: "/images/Mobiles/RealmeGT3.png",
    //         price: "45000",
    //         description: "Realme GT 3 with a high refresh rate screen and great battery life for gamers."
    //     }
    // ],
    cartList: [],
    itemIncreament: 0,
    currentItem: {},
}

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
        itemIncreament: state.itemIncreament + 1
    }
    return updatedState;

}

const removeShopCart = (state, data) => {
    const index = state.cartList.findIndex((item) => item.id === data.id)
    if (index === -1) return state;
    const updatedState = [...state.cartList];
    updatedState.splice(index, 1)
    return {
        ...state, cartList: updatedState, itemIncreament: state.itemIncreament - 1
    };
}

export const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TO_CART: return addshopcart(state, action.payload);
        case REMOVE_TO_CART: return removeShopCart(state, action.payload);
        default:
            return state;
    }
}
// -------------------------------------------------------


// -------------------selected product details----------------//

const viewProduct = (state, data) => {
    const updatedState = {
        ...state,
        prodcutDetails: data,
        // numberOfQuantity: state.numberOfQuantity + 1,
        // priceOfProduct: state.priceOfProduct * 2,
    }
    return updatedState;
}


export const selectProductReducer = (state = SELECTED_PRODUCT_INFO, action) => {
    switch (action.type) {
        case VIEW_CART: return viewProduct(state, action.payload)
        default: {
            return state;
        }
    }
}





// const shoppingReducer = createSlice({
//     name: "ShoppingSlice",
//     initialState: { cartList: [{ id: "1", name: "samsung" }], currentItem: "" },
//     reducers: {
//         addToCart: () => console.log("first"),
//         removeCart: () => console.log("Second")
//     }
// })

// export const { addToCart, removeCart } = shoppingReducer.actions;
// export default shoppingReducer.reducer