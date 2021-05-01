import React, {useState} from 'react'
import { TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {styles as common} from '../styles/common';

const CheckBox = ({check, onCheck}) => {
    const [value, setValue] = useState(check || false);
    return (
        <TouchableOpacity onPress={() => {setValue(!value),onCheck? onCheck(!value) : null}} style={[{ height: 30, width: 30, borderRadius: 5, backgroundColor: value ? '#F2A253':'#F9EEE8', alignItems: 'center', justifyContent: 'center' }, common.shadow]}>
            <MaterialIcons name="check" color={value ? "white" : "gray"} size={20} />
        </TouchableOpacity>
    )
}

export default CheckBox

