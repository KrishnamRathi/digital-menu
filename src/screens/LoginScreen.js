import React,{useState,useEffect} from 'react';
import {  Text, View ,TextInput,ScrollView,TouchableOpacity, Image } from 'react-native'
import { styles } from '../styles/styles'
import '@react-native-firebase/app'
import firestore from '@react-native-firebase/firestore'
import { useDispatch, useSelector } from 'react-redux'
import { getUser,addUser } from '../redux/actions/auth';

export default function LoginScreen({navigation}) {
    const [phone, setPhone] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser('1234567890'));
        dispatch(addUser());
        
    }, [])
    
    return (
        <ScrollView style={{
            paddingHorizontal: 20
        }}>
            <View style={{marginTop:100}}>
                <Text style={[styles.heading,{marginBottom:'10%'}]}>Login</Text>
                <Image
                    style={styles.image}
                    source={require("../assets/icons/mainicon.png")}
                />
                <View style={[styles.SectionStyle,styles.shadows]}>
                    <Image source={require("../assets/icons/phone.png")} style={styles.ImageStyle} />
                    <TextInput
                        style={{flex:1}}
                        keyboardType = 'numeric'
                        placeholder="Phone No."
                        underlineColorAndroid="transparent"
                        onChange={(val)=>setPhone(val)}
                    />
                </View>
                {/* <View style={[styles.SectionStyle,styles.shadows]}>
                    <Image source={require("../assets/icons/lock.png")} style={styles.ImageStyle} />
                    <TextInput
                        style={{flex:1}}
                        placeholder="Password"
                        underlineColorAndroid="transparent"
                        secureTextEntry={true}
                    />
                </View> */}
                <View style={{ paddingBottom: '7%', alignSelf:'center'}}>
                    <TouchableOpacity onPress={() => navigation.navigate("Signup")}><Text>Don't have an account? Sign Up </Text></TouchableOpacity>
                    {/* <TouchableOpacity><Text>Forgot Password?</Text></TouchableOpacity> */}
                </View>
                <View style={{alignItems:'flex-end'}}>
                    <TouchableOpacity style={[styles.button,styles.container]} onPress={() => navigation.navigate("Otp")} >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

