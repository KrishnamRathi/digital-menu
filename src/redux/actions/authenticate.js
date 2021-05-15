import firestore from '@react-native-firebase/firestore'
import {LOGIN, SIGNUP} from '../constants/actionTypes'
import {setLoadingTrue, setSuccessMessage, setErrorMessage} from '../actions';

export const login = (username, admin) => ({
    type: LOGIN,
    username,
    admin
})

export const verifyDetails = (username, password) => (
    async function(dispatch){
        dispatch(setLoadingTrue());
        firestore()
            .collection('User')
            .where('username','==', username)
            .get()
            .then(qs => {
                if(qs.docs.length===0){
                    dispatch(setErrorMessage('No user exists with above username'));
                    return;
                }
                const username = qs.docs[0].data().username;
                const original_password = qs.docs[0].data().password;
                const admin = qs.docs[0].data().admin;
                if(original_password!==password){
                    dispatch(setErrorMessage('Username ans password does not matches'));
                }else{
                    dispatch(setSuccessMessage('Logged in successfully'));
                    dispatch(login(username, admin));
                }
            })
            .catch(err =>{
                dispatch(setErrorMessage('Something went wrong'))
            })
    }
)