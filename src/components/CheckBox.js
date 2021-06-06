import React, {useState, useEffect} from 'react'
import { TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {styles as common} from '../styles/common';
import {useDispatch, useSelector} from 'react-redux';
import {changeOrderStatus, changeStatus} from '../redux/actions/admin'

const CheckBox = ({order_no, status, setColor}) => {
    const dispatch = useDispatch();
    const rest = useSelector(state => state.admin);
    const [check, setCheck] = useState(true);

    useEffect(() => {
        if(status=="complete"){
            setCheck(true);
        }else{
            setCheck(false);
        }
        
    }, [])

    const change = (order_no, status) => {
        dispatch(changeStatus(order_no, status));
        dispatch(changeOrderStatus(rest.orders));
    }
    const setStatus = () => {
        setCheck(!check);
        if(check) return "incomplete"
        return "complete";
    }
    return (
        <TouchableOpacity onPress={() => { change(order_no, setStatus())}} 
            style={[{ height: 30, width: 30, borderRadius: 5, backgroundColor: check ? '#F2A253':'#F9EEE8', alignItems: 'center', justifyContent: 'center' }, common.shadow]}>
            <MaterialIcons name="check" color={check ? "white" : "gray"} size={20} />
        </TouchableOpacity>
    )
}

export default CheckBox

