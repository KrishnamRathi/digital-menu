import { LOGIN, SIGNUP } from '../constants/actionTypes'

const initialState = {
    userid:"",
    name: "",
    phone: "",
    admin: "",
    // restId:""
}

export default auth = (state = initialState, action) => {
    switch(action.type){
        case LOGIN:
            // var user = {};
            // for(let user of action.user){
            //     const category = dish.category
            //     if(!menu[category]){
            //         menu[category] = [];
            //     }
            //     menu[category].push(dish)
            // }
            return action.user
        case SIGNUP:
            return action.user
        default:
             return state;
    }
} 