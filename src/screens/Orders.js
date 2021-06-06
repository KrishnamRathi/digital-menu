import React from 'react'
import { View, Text } from 'react-native'
import { styles as common } from '../styles/common'
import Order from '../components/Order'

const Orders = () => {

    return (
        <View>
            {/* Header */}
            <View style={{ height: 60, backgroundColor: '#F2A253', padding: 10 }}>
                <Text style={[common.fontLargeBold, { alignSelf: 'center' }]}>Orders</Text>
            </View>
            {/* List Of Orders */}
            <Order/>
        </View>
    )
}

export default Orders
