import React,{useEffect} from 'react';
import {  Text, View ,TextInput,ScrollView,TouchableOpacity, Image } from 'react-native'
import { styles } from '../styles/styles'
import '@react-native-firebase/app'
import firestore from '@react-native-firebase/firestore'

export default function LoginScreen({navigation}) {

    // useEffect(()=>{
    //     firestore().collection('User').get().then(querySnapshot => {
    //         console.log('Total users: ', querySnapshot.size);


    //         querySnapshot.forEach(documentSnapshot => {
    //         console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
    //         });
    //     });
    // },[])
    
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
                    <Image source={require("../assets/icons/login.png")} style={styles.ImageStyle} />
                    <TextInput
                        style={{flex:1}}
                        placeholder="Email or Phone No."
                        underlineColorAndroid="transparent"
                    />
                </View>
                <View style={[styles.SectionStyle,styles.shadows]}>
                    <Image source={require("../assets/icons/lock.png")} style={styles.ImageStyle} />
                    <TextInput
                        style={{flex:1}}
                        placeholder="Password"
                        underlineColorAndroid="transparent"
                        secureTextEntry={true}
                    />
                </View>
                <View style={{ paddingBottom: '7%', flexDirection:'row', justifyContent:'space-between'}}>
                    <TouchableOpacity onPress={() => navigation.navigate("Signup")}><Text>Don't have an account? Sign Up </Text></TouchableOpacity>
                    <TouchableOpacity><Text>Forgot Password?</Text></TouchableOpacity>
                </View>
                <View style={{alignItems:'flex-end'}}>
                    <TouchableOpacity style={[styles.button,styles.container]} onPress={() => navigation.navigate("Menu")} >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

