import { FETCH_REST, CHANGE_ORDER_STATUS } from '../constants/actionTypes';
import { setLoadingTrue, setSuccessMessage, setErrorMessage } from './';
import firestore from '@react-native-firebase/firestore';

export const fetchRest = (payload) => ({
    type: FETCH_REST,
    payload
})

export const getRestDetails = (id = 1) => (
    async function (dispatch) {
        try {
            dispatch(setLoadingTrue());
            await firestore()
                .collection('Restaurant')
                .doc(id)
                .get()
                .then((doc) => {
                    dispatch(fetchRest(doc.data()))
                    dispatch(setSuccessMessage('Restaurant details loaded successfully'));
                })
                .catch(err => {
                    dispatch(setErrorMessage(err));
                })
        } catch (e) {
            console.log(e);
        }
    }
)

export const changeStatus = (order_no, status) => ({
    type: CHANGE_ORDER_STATUS,
    order_no,
    status
})

export const changeOrderStatus = (orders) => (
    async function (dispatch) {
        try {
            dispatch(setLoadingTrue());
            await firestore()
                    .collection('Restaurant')
                    .doc('1')
                    .update({orders});
            dispatch(setSuccessMessage("success"));
        }catch(e){
            dispatch(setErrorMessage("error"));
            console.log(e);
        }
    }
)
