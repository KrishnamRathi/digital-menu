import * as type from '../constants/actionTypes';

export const setLoadingTrue = () => ({
    type: type.SET_LOADING_TRUE
})

export const setErrorMessage = (message) => ({
    type: type.SET_ERROR,
    message
})

export const setSuccessMessage = (message) => ({
    type: type.SET_SUCCESS,
    message
})