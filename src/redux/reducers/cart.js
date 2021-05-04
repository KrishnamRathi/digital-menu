import {ADD_TO_CART, DELETE_FROM_CART} from '../constants/actionTypes';

initialState = {
    items:[],
    totalprice: 0
}

// item -> {
//     id: '1',
//     quantity: 0
// }

export default card = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            var dish = null;
            var newState = state;
            state.items.map((item) => item.id==action.dish.id ? dish=item : null);
            newState.items = state.items.filter((item) => item.id!=action.dish.id)
            if(!dish) {
                dish = action.dish
                dish.quantity = 1;
            }
            else dish.quantity++;
            newState.items.push(dish);
            newState.totalprice+=parseInt(action.dish.price);
            return newState;
        case DELETE_FROM_CART:
            var dish = null;
            var newState = state;
            state.items.map((item) => item.id==action.dish.id ? dish=item : null);
            newState.items = state.items.filter((item) => item.id!=action.dish.id)
            if(dish) {
                if(dish.quantity>1){
                    dish.quantity--;
                    newState.items.push(dish);
                    newState.totalprice-=parseInt(action.dish.price);
                } 
            }
            return newState;
        default:
            return state;
    }
}


