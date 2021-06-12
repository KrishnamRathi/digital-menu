import React, { useEffect } from 'react'
import { ScrollView, Text, Image, View, ImageBackground, Animated } from 'react-native'
import { styles as common } from '../styles/common'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux'
import { getRestDetails } from '../redux/actions/admin'

const AdminProfile = () => {
    const dispatch = useDispatch();
    const rest = useSelector(state => state.admin);
    useEffect(() => {
        dispatch(getRestDetails('1'));
    }, [])
    const pan = React.useRef(new Animated.ValueXY()).current;

    return (
        <View style={{marginBottom: 100}}>
            <Image source={{ uri: rest?.image }} style={{ height: '60%', width: '100%',  backgroundColor: 'black', position: 'relative'}} />
            <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginTop: '-4%', paddingHorizontal: 5}}>
                <Text style={[common.fontMediumBold, { color: 'black' }]}>{rest?.name}</Text>
                <View>
                    <MaterialIcons name="food-bank" color='#F2A253' size={60} />
                    <Text style={{ fontSize: 11 }}>11 AM-11 PM</Text>
                </View>
            </View>

            <ScrollView style={{paddingHorizontal: 10}}>
                <Text style={[common.fontSmallBold, { fontSize: 15, width: '60%', marginTop: 10 }]}>Address: </Text>
                <Text style={[common.fontSmall, { fontSize: 15, width: '60%', marginTop: 10 }]}>{rest?.address}</Text>
                <Text style={[common.fontSmallBold, { fontSize: 15, width: '60%', marginTop: 10 }]}>Contact: </Text>
                <Text style={[common.fontSmall, { fontSize: 15, width: '60%', marginTop: 10 }]}>+91 {rest?.contact}</Text>
                <Text style={[common.fontSmallBold, {marginTop: 20,}]}>About</Text>
                <Text style={{ fontSize: 14}}>{rest?.about}</Text>
            </ScrollView>
        </View>
    )
}

export default AdminProfile