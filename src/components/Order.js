import React from 'react'
import { View, Text } from 'react-native'
import { styles as common } from '../styles/common'
import CheckBox from '../components/CheckBox';

const Order = ({check, onCheck, items}) => {
    return (
        <View>
            <View style={[{ padding: 20 }, common.shadow]}>
                <Text style={[common.fontSmall,{fontWeight:'bold'}]}>Order No. 986</Text>
                <View style={{flexDirection:'row',}}>
                    <View style={{ flexDirection: 'column', alignItem: 'flex-start' , justifyContent: 'center' }}>
                        {items.map(({name, quantity}, index) => (
                            <Text key={index}>{name} x {quantity}</Text>
                        ))}
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'flex-end', flex: 1 }}>
                        <CheckBox check={check} onCheck={onCheck}/>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Order
