import React,{useState} from 'react'
import { View, Text, TextInput, Button, Image, TouchableOpacity, ScrollView, FlatList,Modal,Pressable,TouchableWithoutFeedback } from 'react-native'
import { styles } from '../styles/menu';
import { styles as common } from '../styles/common';
import Card2 from '../components/Card2';
import Category from '../components/Category';

const data = [
    {
        name: 'Pizza',
        price: '12.00',
        desc: 'Chicken Pizza',
        quantity: 2
    },
    {
        name: 'Burger',
        price: '8.00',
        desc: 'Veg Burger',
        quantity: 3
    },
    {
        name: 'Sizzler',
        price: '20.00',
        desc: 'Chinese Sizzler',
        quantity: 1
    },
    {
        name: 'Butter paneer masala',
        price: '10.00',
        desc: 'White Sauce',
        quantity: 2
    }
]


const Invoice = ({changeShow}) => {
    const [modalVisible, setModalVisible] = useState(true);

    return (
        <View style={{height:'100%'}}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                alert("Modal has been closed.");
                setModalVisible(!modalVisible);
                changeShow()
                }}
            >
                        <View>
                            <TouchableOpacity style={{height: '35%'}} onPress={()=>changeShow()}></TouchableOpacity>
                            <View style={{ backgroundColor: 'white',borderWidth:2,borderColor:'black',borderRadius:30 }}>
                                <Text style={[common.veryLargeFontBold,{marginHorizontal:10,color:'#F2A253'}]}>Invoice</Text>
                                <View style={{height: '55%',marginHorizontal:10}}>
                                    <FlatList
                                        data={data}
                                        keyExtractor={(data, index) => data.desc}
                                        renderItem={({ item, index }) => {
                                            return (
                                                <View key={index} style={{ marginTop: 15 }}>
                                                    <Card2 name={item.name} desc={item.desc} price={item.price} quantity={item.quantity}/>
                                                </View>
                                            )
                                        }}
                                    />
                                </View>
                                <View style={{justifyContent: 'center',height: '5%',marginVertical:'9%',marginHorizontal:10 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Text style={common.fontSmall}>Total Payable: </Text>
                                        <Text style={common.veryLargeFontBold}>$24.50</Text>
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

