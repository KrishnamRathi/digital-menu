import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'


const Category = ({active, name}) => {
    return (
        <View>
            <TouchableOpacity style={{flexDirection: 'row', height: 40, width: 70, borderRadius: 10, backgroundColor:active ? '#F2A253' : '#F9EEE8', alignItems: 'center'}}>
                <Image source={require("../assets/icons/pizza.png")} style={{height: 25, width: 25, marginLeft: -5, backgroundColor: 'white', borderRadius: 5, marginRight: 5}}/>
                <Text style={{color: 'black'}}>{name}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Category
