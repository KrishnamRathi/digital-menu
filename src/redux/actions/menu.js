import * as types from '../constants/actionTypes';
import * as status from './';
import firestore from '@react-native-firebase/firestore';

export const getMenu = (menu) => ({
    type: types.GET_MENU,
    menu
})

export const fetchMenu = (restId = '1') => {
    return function async(dispatch) {
        dispatch(status.setLoadingTrue());
        var menu = [];
        firestore().collection('Restaurant')
            .doc(restId)
            .onSnapshot((rest) => {
                menu = rest.data().menu;
                dispatch(getMenu(menu));
                dispatch(status.setSuccessMessage("success"));
            });
    }
}
