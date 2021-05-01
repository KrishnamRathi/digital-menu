import React from 'react'
import { View, Text } from 'react-native'
import { styles as common } from '../styles/common'
import CheckBox from '../components/CheckBox';

const Order = ({check, onCheck, items}) => {
    return (
        <View style={[{ flexDirection: 'row', padding: 20, alignItems: 'center', justifyContent: 'center' }, common.shadow]}>
            <View>
                {items.map(({name, quantity}, index) => (
                    <Text key={index}>{name} x {quantity}</Text>
                ))}
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'flex-end', flex: 1 }}>
                <CheckBox check={check} onCheck={onCheck}/>
            </View>
        </View>
    )
}

export default Order
