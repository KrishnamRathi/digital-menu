import React from 'react'
import { View, Text } from 'react-native'
import { styles as common } from '../styles/common'

const Card2 = ({ name, quantity }) => {
    return (
        <View style={{ flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginLeft: 2}} >
            <View style={{ flexDirection:'row',alignItems:'center'}}>
                <Text style={common.fontSmallBold}>{name} X {quantity} </Text>
            </View>
            <Text style={[common.fontSmallBold,{marginRight:'3%'}]}>$40  </Text>
        </View>
    )
}

export default Card2
