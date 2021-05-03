import { GET_MENU } from '../constants/actionTypes'

const initialState = {
    menu: []
}

export default menu = (state = initialState, action) => {
    switch(action.type){
        case GET_MENU:
            return {menu : action.menu};
        default:
             return state;
    }
} 