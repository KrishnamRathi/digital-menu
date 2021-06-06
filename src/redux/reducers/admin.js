import {FETCH_REST, CHANGE_ORDER_STATUS} from '../constants/actionTypes';

initialState = null

export default admin = (state = initialState, action) => {
    switch(action.type){
        case FETCH_REST:
            return action.payload;
        case CHANGE_ORDER_STATUS:
            const orders = state.orders;
            orders.forEach(order => order.order_no==action.order_no ? order.status = action.status : null);
            state.orders = orders;
            return state;
        default:
            return state;
    }
}


