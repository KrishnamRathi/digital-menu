import React from 'react'
import { View, Text } from 'react-native'
import { styles as common } from '../styles/common'

const AdminProfile = () => {
    return (
        <View style={{ flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginLeft: 2}} >
            <View style={{ flexDirection:'row',alignItems:'center'}}>
                <Text style={common.fontSmallBold}>Name </Text>
            </View>
            <Text style={[common.fontSmallBold,{marginRight:'3%'}]}>Price</Text>
        </View>
    )
}

export default AdminProfile