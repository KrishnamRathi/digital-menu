import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, Button, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { styles } from '../styles/menu';
import { styles as common } from '../styles/common';
import Card from '../components/Card';
import Category from '../components/Category';
import firestore from '@react-native-firebase/firestore';
import { useDispatch, useSelector } from 'react-redux'
import { fetchMenu } from '../redux/actions/menu';
import CommaSeperator from '../utils/commaSeperator';
import FilterModal from '../components/FilterModal';

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
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const menu = useSelector(state => state.menu.menu);
    const currentCategory = useSelector(state => state.menu.currentCategory);
    const totalprice = useSelector(state => state.cart.totalprice);
    const [keyword, setKeyword] = useState("");
    const [showfilter, setShowfilter] = useState(false);

    const changeShow = () => {
        setShow(!show)
    }

    useEffect(() => {
        dispatch(fetchMenu('1'));
    }, [])

    if (menu) {
        return (
            <View style={{ padding: 10 }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 20 }}>
                    <TextInput style={styles.textfield} value={keyword} onChangeText={(word) => setKeyword(word.toLowerCase())} placeholder="Search for any dish" />
                    <TouchableOpacity onPress={() => setShowfilter(!showfilter)}>
                        <Image source={require('../assets/icons/filter.png')}
                            style={{ borderRadius: 8, height: 40, width: 40 }}
                        />
                    </TouchableOpacity>
                </View>
                {/* Categories */}
                <View style={{ flexDirection: 'row', overflowX: 'scroll' }}>
                    {Object.keys(menu).map((category) => {
                        return (
                            <View key={category} style={{ marginLeft: 20 }}>
                                <Category name={category} active={currentCategory === category} />
                            </View>
                        )
                    })}
                </View>
                {currentCategory.length === 0 ? <Text style={common.fontSmallBold}>No dishes in the menu</Text> : null}
                {/* Items per category */}
                <View style={{ height: '65%' }}>
                    <FlatList
                        data={menu[currentCategory]}
                        keyExtractor={(data, index) => data.id}
                        renderItem={({ item, index }) => {
                            if (item.name.toLowerCase().includes(keyword) || item.description.toLowerCase().includes(keyword))
                                return (
                                    <View style={{ marginTop: 20 }}>
                                        <Card id={item.id} image={item.image} name={item.name} desc={item.description} price={item.price} />
                                    </View>
                                )
                        }}
                    />
                </View>
                {/* Total payable details */}
                <View style={{ backgroundColor: 'white', justifyContent: 'center', height: '20%', marginHorizontal: -20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20 }}>
                        <Text style={common.fontSmall}>Total Payable: </Text>
                        <Text style={common.veryLargeFontBold}>₹{CommaSeperator(parseInt(totalprice))}</Text>
                    </View>
                    <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setShow(true)}>
                        <Text style={[common.fontLargeBold, common.buttonText]}>Checkout</Text>
                    </TouchableOpacity>
                </View>
                {/* Modal to show Invoice */}
                {show ? <Invoice changeShow={changeShow} /> : null}
                {/* Modal to apply filters */}
                {showfilter ? <FilterModal setShow={setShowfilter} /> : null}
            </View>
        )
    }
}

export default Menu

