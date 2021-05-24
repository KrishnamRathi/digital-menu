import React from 'react'
import { View, Text } from 'react-native'
import { styles as common } from '../styles/common'

const AdminAddItem = () => {
    return (
        <View style={{ flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginLeft: 2}} >
            <View style={{ flexDirection:'row',alignItems:'center'}}>
                <Text style={common.fontSmallBold}>{name} X {quantity} </Text>
            </View>
            <Text style={[common.fontSmallBold,{marginRight:'3%'}]}>₹{CommaSeperator(parseInt(price)*quantity)}</Text>
        </View>
    )
}

export default AdminAddItem
