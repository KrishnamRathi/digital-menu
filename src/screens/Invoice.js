import React, { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, Modal } from 'react-native'
import { styles as common } from '../styles/common';
import InvoiceDetail from '../components/InvoiceDetail';
import { useSelector } from 'react-redux';
import CommaSeperator from '../utils/commaSeperator';

const Invoice = ({ changeShow }) => {
    const [modalVisible, setModalVisible] = useState(true);
    const cart = useSelector(state => state.cart);

    return (
        <View style={{ height: '100%' }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                    changeShow()
                }}
            >
                <View>
                    <TouchableOpacity style={{ height: '35%' }} onPress={() => changeShow()}></TouchableOpacity>
                    <View style={[{ backgroundColor: 'white', borderColor: 'black', borderRadius: 30 }, common.shadow]}>
                        <Text style={[common.veryLargeFontBold, { margin: 10, marginTop: 20, color: '#F2A253' }]}>Invoice</Text>
                        <View style={{ height: '55%', marginHorizontal: 10 }}>
                            {cart.items.length === 0 ? <Text style={common.fontSmallBold}>Add something to cart.</Text> : (
                                <FlatList
                                    data={cart.items}
                                    keyExtractor={(data, index) => data.id}
                                    renderItem={({ item, index }) => {
                                        return (
                                            <View key={item.id}>
                                                <InvoiceDetail id={item.id} name={item.name} price={item.price} quantity={item.quantity} />
                                            </View>
                                        )
                                    }}
                                />
                            )}

                        </View>
                        <View style={{ justifyContent: 'center', height: '5%', marginVertical: '5%', marginHorizontal: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                                <Text style={common.fontSmall}>Total Payable: </Text>
                                <Text style={common.veryLargeFontBold}>₹{CommaSeperator(parseInt(cart.totalprice))} </Text>
                            </View>
                            <TouchableOpacity style={{ alignItems: 'center' }}>
                                <Text style={[common.fontLargeBold, common.buttonText]}>Place Order</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default Invoice

