import React, {useEffect} from 'react'
import { View, Text,Image } from 'react-native'
import { styles as common } from '../styles/common'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useSelector, useDispatch} from 'react-redux'
import {getRestDetails} from '../redux/actions/admin'

const AdminProfile = () => {
    const dispatch = useDispatch();
    // const rest = useSelector(state => state.admin);
    useEffect(() => {
        dispatch(getRestDetails('1'));
    }, [])
    return (
        <View>
            <Image source={require("../assets/images/restaurant.jpeg")} style={{ height: '70%', width: '100%'}} />
            <View style={{ marginLeft:'80%',marginTop:'-4%'}} >
                <MaterialIcons name="food-bank" color='#F2A253' size={60} />
                <Text style={{ fontSize:11}}>10 AM-10 PM</Text>
            </View>
            <View style={{marginHorizontal:15,marginTop:'7%'}}>
                <Text style={[common.fontLarge,{marginTop:'-20%'}]}>Grande Restaurant</Text>
                <Text style={[common.secondaryText,{fontSize:15}]}>Indore, MP</Text>
                <Text style={[common.secondaryText,{fontSize:15,marginTop:5}]}>+919876543210</Text>
                <Text style={{marginTop:24,fontSize:14}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</Text>
            </View>
        </View>
    )
}

export default AdminProfile