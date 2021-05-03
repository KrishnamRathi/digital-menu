import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles as common } from '../styles/common'

const Card = ({ name, desc, price }) => {
    return (
        <View style={[{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 100, borderRadius: 10, padding: 20, borderWidth: 1}]}>
            <View style={{ flexDirection: 'row' }}>
                <Image source={require("../assets/icons/pizza.png")} style={{ height: 60, width: 60, alignSelf: 'center' }} />
                <View style={{ justifyContent: 'center', padding: 20 }}>
                    <View style={{ flexDirection: 'row',alignItems:'center' }}>
                        <Text style={common.fontSmallBold}>{name} </Text>
                        <Image source={require("../assets/icons/veg.png")} style={{ height: 10, width: 10,marginLeft:'5%' }} />
                    </View>
                    <Text style={common.secondaryText}>{desc}</Text>
                    <Text>${price}</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={common.fontSmallBold}>2</Text>
                <View style={{ flexDirection: 'row', backgroundColor: '#F2A253', width: 60, height: 30, borderRadius: 20, justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <TouchableOpacity>
                        <Text style={common.fontLargeBold}>−</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={common.fontLargeBold}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Card
