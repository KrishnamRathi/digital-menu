import React, { useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { styles as common } from '../styles/common'
import Order from '../components/Order'

const orders = [
    {
        id:1,
        items: [
            {
                name: "Pizza",
                quantity: 2
            },
            {
                name: "Burger",
                quantity: 3
            },
        ],
        status: true
    },
    {
        id: 2,
        items: [
            {
                name: "Pizza",
                quantity: 2
            },
            {
                name: "Burger",
                quantity: 3
            },
            {
                name: "Cold Coffee",
                quantity: 5
            },
            {
                name: "Sizzler",
                quantity: 2
            },
        ],
        status: false
    },
    {
        id: 3,
        items: [
            {
                name: "Pizza",
                quantity: 2
            },
            {
                name: "Cold Coffee",
                quantity: 5
            },
            {
                name: "Sizzler",
                quantity: 2
            },
        ],
        status: false
    },
]

const Orders = () => {
    const [val, setVal] = useState(false)
    return (
        <View>
            {/* Header */}
            <View style={{ height: 60, backgroundColor: '#F2A253', padding: 10 }}>
                <Text style={[common.fontLargeBold, { alignSelf: 'center' }]}>Orders</Text>
            </View>
            {/* List Of Orders */}
            <FlatList
                data={orders}
                keyExtractor={(item, index) => index+""}
                renderItem={({item, index}) => (
                    <View key={index}>
                        <Order items={item.items} check={item.status}/>
                        <View style={[{ height: 1, width: '100%', borderStyle: 'dotted' }, common.shadow]} />
                    </View>
                )}
            />

        </View>
    )
}

export default Orders
