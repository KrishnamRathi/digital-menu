import React,{useState, useEffect} from 'react';
import {  Text, View ,TextInput,ScrollView,TouchableOpacity, Image } from 'react-native'
import { styles } from '../styles/styles'
import '@react-native-firebase/app'
import {useSelector, useDispatch} from 'react-redux'
import {verifyDetails} from '../redux/actions/authenticate';
import {setErrorMessage, setSuccessMessage} from '../redux/actions'

export default function LoginScreen({navigation}) {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const error =  useSelector(state => state.status.error);

    const login = () => {
        if(!username || !password) {
            dispatch(setErrorMessage("Please fill both the entries !"));
            return;
        }
        dispatch(verifyDetails(username, password))
    }
 
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
                        value={username}
                        onChangeText={(username) => setUsername(username)}
                    />
                </View>
                <View style={[styles.SectionStyle,styles.shadows]}>
                    <Image source={require("../assets/icons/lock.png")} style={styles.ImageStyle} />
                    <TextInput
                        style={{flex:1}}
                        placeholder="Password"
                        underlineColorAndroid="transparent"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(password) => setPassword(password)}
                    />
                </View>
                <View style={{ paddingBottom: '7%', flexDirection:'row', justifyContent:'space-between'}}>
                    <TouchableOpacity onPress={() => {navigation.navigate("Signup");dispatch(setSuccessMessage("")); dispatch(setErrorMessage(""))}}><Text>Don't have an account? Sign Up </Text></TouchableOpacity>
                    <TouchableOpacity><Text>Forgot Password?</Text></TouchableOpacity>
                </View>
                <View style={{alignItems:'flex-end'}}>
                    <TouchableOpacity style={[styles.button,styles.container]} onPress={login} >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{color: 'red', alignSelf: 'center', margin: 10}}>{error}</Text>
            </View>
        </ScrollView>
    )
}

