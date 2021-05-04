import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux';
import {changeCategory} from '../redux/actions/menu';


const Category = ({active, name}) => {
    const dispatch = useDispatch();
    return (
        <View>
            <TouchableOpacity onPress={() => dispatch(changeCategory(name))} style={{flexDirection: 'row', height: 40, paddingRight: 5, borderRadius: 10, backgroundColor:active ? '#F2A253' : '#F9EEE8', alignItems: 'center'}}>
                <Image source={require("../assets/icons/pizza.png")} style={{height: 25, width: 25, marginLeft: -10, backgroundColor: 'white', borderRadius: 5, marginRight: 5}}/>
                <Text style={{color: 'black'}}>{name}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Category
