import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, Button, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { styles } from '../styles/menu';
import { styles as common } from '../styles/common';
import Card from '../components/Card';
import Category from '../components/Category';
import firestore from '@react-native-firebase/firestore';
import { useDispatch, useSelector } from 'react-redux'
import {fetchMenu} from '../redux/actions/menu';
import Invoice from './Invoice';

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
    const [show,setShow]=useState(false);
    const dispatch = useDispatch();
    const menu = useSelector(state => state.menu.menu);

    const changeShow= () =>{
        setShow(!show)
    }

    useEffect(() => {
        dispatch(fetchMenu());
    }, [])

    if (!menu) return <Text>Loading ...</Text>
    else {
        return (
            <View style={{ padding: 10 }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 20 }}>

                    <TextInput style={styles.textfield} placeholder="Search for any dish" />
                    <TouchableOpacity>
                        <Image source={require('../assets/icons/filter.png')}
                            style={{ borderRadius: 8, height: 40, width: 40 }}
                        />
                    </TouchableOpacity>
                </View>
                {/* Categories */}
                <View style={{ flexDirection: 'row', overflowX: 'scroll' }}>
                    <FlatList
                        horizontal={true}
                        data={menu}
                        keyExtractor={(data, index) => index + ""}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={{ marginLeft: 20 }}>
                                    <Category name={item.category} active={index === 0 ? true : false} />
                                </View>
                            )
                        }}
                    />
                </View>
                {/* Items per category */}
                <View style={{ height: '65%' }}>
                    <FlatList
                        data={menu}
                        keyExtractor={(data, index) => index + ""}
                        renderItem={({ item, index }) => {
                            return (
                                <View key={index} style={{ marginTop: 20 }}>
                                    <Card image={item.image} name={item.name} desc={item.description} price={item.price} />

                                </View>
                            )
                        }}
                    />
                </View>
                {/* Total payable details */}
                <View style={{ backgroundColor: 'white', justifyContent: 'center', height: '20%', marginHorizontal: -20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20 }}>
                        <Text style={common.fontSmall}>Total Payable: </Text>
                        <Text style={common.veryLargeFontBold}>$24.50</Text>
                    </View>
                    <TouchableOpacity style={{ alignItems: 'center' }} onPress={()=>setShow(true)}>
                        <Text style={[common.fontLargeBold, common.buttonText]}>Checkout</Text>
                    </TouchableOpacity>
                </View>
            {show?<Invoice changeShow={changeShow}/>:null}
        </View>
        )
    }
}

export default Menu

