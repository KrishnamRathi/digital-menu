import {GET_MENU, CHANGE_CATEGORY} from '../constants/actionTypes';
import * as status from './';
import firestore from '@react-native-firebase/firestore';

export const getMenu = (menu) => ({
    type: GET_MENU,
    menu
})

export const changeCategory = (category) =>({
    type: CHANGE_CATEGORY,
    category
})

export const fetchMenu = (restId = '1') => {
    return function async(dispatch) {
        dispatch(status.setLoadingTrue());
        var menu = [];
        firestore().collection('Restaurant')
            .doc(restId)
            .onSnapshot((rest) => {
                if (rest.data()) {
                    menu = rest.data().menu;
                    dispatch(getMenu(menu));
                    dispatch(status.setSuccessMessage("success"));
                }else{
                    dispatch(getMenu(menu));
                    dispatch(status.setErrorMessage("fail"));
                }
            });
    }
}
