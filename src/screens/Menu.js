import React from 'react'
import { View, Text, TextInput, Button, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { styles } from '../styles/menu';
import { styles as common } from '../styles/common';
import Card from '../components/Card';
import Category from '../components/Category';

const data = [
    {
        name: 'Pizza',
        price: '12.00',
        desc: 'Chicken Pizza'
    },
    {
        name: 'Burger',
        price: '8.00',
        desc: 'Veg Burger'
    },
    {
        name: 'Sizzler',
        price: '20.00',
        desc: 'Chinese Sizzler'
    },
    {
        name: 'Pasta',
        price: '10.00',
        desc: 'White Sauce'
    },
    {
        name: 'Burder',
        price: '12.00',
        desc: 'Chicken Burger'
    },
    {
        name: 'Pizza',
        price: '11.00',
        desc: 'Veg Pizza'
    },
]


const Menu = () => {
    return (
        <View style={{padding: 10}}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 20 }}>
                <TextInput style={styles.textfield} placeholder="Search for any dish" />
                <TouchableOpacity>
                    <Image source={require('../assets/icons/filter.png')}
                        style={{ borderRadius: 8, height: 40, width: 40 }}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', overflowX: 'scroll' }}>
                <FlatList
                    horizontal={true}
                    data={data}
                    keyExtractor={(data, index) => data.desc}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{ marginLeft: 20 }}>
                                <Category name={item.name} active={index === 0 ? true : false} />
                            </View>
                        )
                    }}
                />
            </View>
            <View style={{height: '65%'}}>
                <FlatList
                    data={data}
                    keyExtractor={(data, index) => data.desc}
                    renderItem={({ item, index }) => {
                        return (
                            <View key={index} style={{ marginTop: 20 }}>
                                <Card name={item.name} desc={item.desc} price={item.price} />
                            </View>
                        )
                    }}
                />
            </View>
            <View style={{ backgroundColor: 'white', justifyContent: 'center', height: '20%', marginHorizontal: -20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20 }}>
                    <Text style={common.fontSmall}>Total Payable: </Text>
                    <Text style={common.veryLargeFontBold}>$24.50</Text>
                </View>
                <TouchableOpacity style={{ alignItems: 'center' }}>
                    <Text style={[common.fontLargeBold, common.buttonText]}>Checkout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Menu

