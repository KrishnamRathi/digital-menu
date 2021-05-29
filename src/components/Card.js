import React,{useState} from 'react'
import { View, Text, Image, TouchableOpacity,Switch } from 'react-native'
import { styles as common } from '../styles/common'
import {addToCart, deleteFromCart} from '../redux/actions/cart'
import {useSelector, useDispatch} from 'react-redux';
import CommaSeperator from '../utils/commaSeperator';

const Card = ({ name, desc, price, image, id }) => {
    const dispatch = useDispatch();
    const item = useSelector(state => state.cart.items.filter((item) => item.id===id))
    const quantity = item?.length > 0 ? item[0].quantity : 0;
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const isAdmin=true

    return (
        <View style={[{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 100, borderRadius: 10, padding: 20, borderWidth: 1}]}>
            <View style={{ flexDirection: 'row' }}>
                <Image source={{uri: image}} style={{ height: 60, width: 60, alignSelf: 'center', borderRadius: 10 }} />
                <View style={{ justifyContent: 'center', padding: 20 }}>
                    <View style={{ flexDirection: 'row',alignItems:'center' }}>
                        <Text style={common.fontSmallBold}>{name} </Text>
                        <Image source={require("../assets/icons/veg.png")} style={{ height: 10, width: 10,marginLeft:'5%' }} />
                    </View>
                    <Text style={common.secondaryText}>{desc}</Text>
                    <Text style={common.fontSmallBold}>₹{CommaSeperator(parseInt(price))}</Text>
                </View>
            </View>
            {isAdmin?<Switch
                trackColor={{ false: "#767577", true: "#F2A253" }}
                thumbColor={isEnabled ? "#F9EEE8" : "#f4f3f4"}
                ios_backgroundColor="#F2A253"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />:<View style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={common.fontSmallBold}>{quantity}</Text>
                    <View style={{ flexDirection: 'row', backgroundColor: '#F2A253', width: 60, height: 30, borderRadius: 20, justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => dispatch(deleteFromCart({name, id, price, desc}))}>
                            <Text style={common.fontLargeBold}>−</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => dispatch(addToCart({name, id, price, desc}))}>
                            <Text style={common.fontLargeBold}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }
        </View>
    )
}

export default Card
