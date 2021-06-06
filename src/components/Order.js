import React, { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import { styles as common } from '../styles/common'
import CheckBox from '../components/CheckBox';
import { useSelector } from 'react-redux';


const Order = () => {
    const orders = useSelector(state => state.admin);
    return (
        <View>
            {orders ? <FlatList
                data={orders.orders}
                keyExtractor={(item) => item.order_no}
                renderItem={({ item }) => (
                    <View key={item.order_no} style={[{ padding: 20, backgroundColor: true ? '#daf7c8' : '#fcdbd2' }, common.shadow]}>
                        <Text style={[common.fontSmall, { fontWeight: 'bold' }]}>Order No. {item.order_no}</Text>
                        <View style={{ flexDirection: 'row', }}>
                            <View style={{ flexDirection: 'column', alignItem: 'flex-start', justifyContent: 'center' }}>
                                {item?.items?.map(({ id, name, quantity }, index) => (
                                    <Text key={id}>{name} x {quantity}</Text>
                                ))}
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'flex-end', flex: 1 }}>
                                <CheckBox status={item.status} order_no={item.order_no}/>
                            </View>
                        </View>
                    </View>
                )}
            /> : <Text>No orders</Text>}
        </View>
    )
}

export default Order
