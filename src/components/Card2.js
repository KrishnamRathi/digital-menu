import React from 'react'
import { View, Text } from 'react-native'
import { styles as common } from '../styles/common'
import CommaSeperator from '../utils/commaSeperator';

const Card2 = ({ name, quantity, price }) => {
    return (
        <View style={{ flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginLeft: 2}} >
            <View style={{ flexDirection:'row',alignItems:'center'}}>
                <Text style={common.fontSmallBold}>{name} X {quantity} </Text>
            </View>
            <Text style={[common.fontSmallBold,{marginRight:'3%'}]}>₹{CommaSeperator(parseInt(price)*quantity)}</Text>
        </View>
    )
}

export default Card2
