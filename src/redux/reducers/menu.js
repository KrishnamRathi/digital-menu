import { GET_MENU, CHANGE_CATEGORY } from '../constants/actionTypes'

const initialState = {
    menu: {},
    currentCategory: "",
}

export default menu = (state = initialState, action) => {
    switch(action.type){
        case GET_MENU:
            var  menu = {};
            for(let dish of action.menu){
                const category = dish.category
                if(!menu[category]){
                    menu[category] = [];
                }
                menu[category].push(dish)
            }
            return {menu, currentCategory: Object.keys(menu)[0]}
        case CHANGE_CATEGORY:
            return {...state, currentCategory: action.category}
        default:
             return state;
    }
} 