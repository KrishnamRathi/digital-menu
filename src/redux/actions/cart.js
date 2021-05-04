import {ADD_TO_CART, DELETE_FROM_CART} from '../constants/actionTypes';

export const addToCart = (dish) => ({
    type: ADD_TO_CART,
    dish
})

export const deleteFromCart = (dish) => ({
    type: DELETE_FROM_CART,
    dish
})