import {LOGIN, SIGNUP} from '../constants/actionTypes';


const initialState = {
    username: "",
    admin: ""
}
export default authenticate = (state = initialState, action) => {
    switch(action.type){
        case LOGIN:
            state.username = action.username;
            state.admin = state.admin;
            return state;
        default:
            return state;
    }
}