import { LOGIN, SIGNUP } from '../constants/actionTypes';
import * as status from './';
import firestore from '@react-native-firebase/firestore';

export const login = (user) => ({
    type: LOGIN,
    user
})

export const signup = (user) =>({
    type: SIGNUP,
    user
})

export const getUser = (phoneNo = '1234567890') => {
    return function async(dispatch) {
        dispatch(status.setLoadingTrue());
        var User = {};
        firestore().collection('User').where('phone','==',phoneNo).get().then(querySnapshot => {
            console.log('Total users: ', querySnapshot.size);
            if(querySnapshot.size==0){
                dispatch(login(User));
                dispatch(status.setErrorMessage("fail"));
            }
            
            querySnapshot.forEach(documentSnapshot => {
                User=documentSnapshot.data();
                dispatch(login(User));
                dispatch(status.setSuccessMessage("success"));
            });
        });
    }
}

export const addUser = () => {
    return function async(dispatch) {
        dispatch(status.setLoadingTrue());
        var User = {};
        firestore().collection('User').add({
                name: "ABCD",
                phone: "9876543210",
                admin: false
        })
        // .then(querySnapshot => {
        //     console.log('Total users: ', querySnapshot.size);
        //     if(querySnapshot.size==0){
        //         dispatch(login(User));
        //         dispatch(status.setErrorMessage("fail"));
        //     }
            
        //     querySnapshot.forEach(documentSnapshot => {
        //         User=documentSnapshot.data();
        //         dispatch(login(User));
        //         dispatch(status.setSuccessMessage("success"));
        //     });
        // });
    }
}