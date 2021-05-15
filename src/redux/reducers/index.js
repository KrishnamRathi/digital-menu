import menu from './menu';
import cart from './cart';
import authenticate from './authenticate';
import { combineReducers }  from 'redux'
import * as type from '../constants/actionTypes';

const initialstate = {
    loading: false, 
    error: "", 
    success: ""
};

const status = (state = initialstate, action) =>{
    switch(action.type){
        case type.SET_LOADING_TRUE: 
            return {loading: true, error: "", success: ""};
        case type.SET_ERROR:
            return {loading: false, error: action.message, success: ""};
        case type.SET_SUCCESS:
            return {loading: false, error: "", success: action.message};
        default: return state
    }
} 

export default combineReducers({menu, status, cart, authenticate});
