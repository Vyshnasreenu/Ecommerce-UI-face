import * as actionTypes from '../constrainsTypes'

export const addShoppingCart = (itemId) => {
    // console.log(itemId, "actionccreateor")
    return {
        type: actionTypes.ADD_TO_CART,
        payload: itemId,
    }
}

export const removeShoppingCart = (itemId) => {
    return {
        type: actionTypes.REMOVE_TO_CART,
        payload: itemId,
    }
}

export const viewCart = (itemId) => {
    return {
        type: actionTypes.VIEW_CART,
        payload: itemId,
    }
}