import React, {useState} from 'react'
import { Text, View ,TextInput,ScrollView, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from '../styles/styles'
import {useSelector, useDispatch} from 'react-redux'
import {setErrorMessage, setSuccessMessage} from '../redux/actions'
import {register} from '../redux/actions/authenticate'

export default function SignupScreen({navigation}) {
    const dispatch = useDispatch();
    const error = useSelector(state => state.status.error)
    const success = useSelector(state => state.status.success)
    const [name, setName] = useState(null);
    const [username, setUsername] = useState(null);
    const [p1, setP1] = useState(null);
    const  [p2, setP2] = useState(null);

    const signup = () => {
        if(!name || !username || !p1 || !p2){
            dispatch(setErrorMessage("Please fill all the entries !"));
            return;
        }
        if(p1!==p2) {
            dispatch(setErrorMessage("Passwords do not match !"));
            setP1(null)
            setP2(null)
            return;
        }
        dispatch(register(name, username, p1));
        setName(null);
        setUsername(null);
        setP1(null);
        setP2(null);
    }

    return (
        <ScrollView style={{
            flex: 1,
            alignSelf: 'stretch',
            paddingLeft: 20,
            paddingRight: 20
            
        }}
            >
            <View style={{marginTop:30}}>
            <Text style={[styles.heading,{marginBottom:'5%'}]}>Signup</Text>
                <Image
                    style={styles.image}
                    source={require("../assets/icons/mainicon.png")}
                />
            <View style={[styles.SectionStyle,styles.shadows]}>
                    <Image source={require("../assets/icons/name.png")} style={styles.ImageStyle} />
                    <TextInput
                        style={{flex:1}}
                        placeholder="Name"
                        underlineColorAndroid="transparent"
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
            </View>
            <View style={[styles.SectionStyle,styles.shadows]}>
                    <Image source={require("../assets/icons/email.png")} style={styles.ImageStyle} />
                    <TextInput
                        style={{flex:1}}
                        placeholder="Username"
                        underlineColorAndroid="transparent"
                        value={username}
                        onChangeText={(text) => setUsername(text)}
                    />
            </View>
                <View style={[styles.SectionStyle,styles.shadows]}>
                    <Image source={require("../assets/icons/lock.png")} style={styles.ImageStyle} />
                    <TextInput
                        style={{flex:1}}
                        placeholder="Password"
                        underlineColorAndroid="transparent"
                        secureTextEntry={true}
                        value={p1}
                        onChangeText={(text) => setP1(text)}
                    />
                </View>
                <View style={[styles.SectionStyle,styles.shadows]}>
                    <Image source={require("../assets/icons/lock.png")} style={styles.ImageStyle} />
                    <TextInput
                        style={{flex:1}}
                        placeholder="Confirm Password"
                        underlineColorAndroid="transparent"
                        secureTextEntry={true}
                        value={p2}
                        onChangeText={(text) => setP2(text)}
                    />
                </View>
            <TouchableOpacity 
                onPress={() => {navigation.navigate('Login'); dispatch(setSuccessMessage("")); dispatch(setErrorMessage(""))}}
                style={{alignSelf:'center'}}
            >
                <Text>Already have an account? Sign In </Text>
            </TouchableOpacity>
            <View style={{marginTop: '4%'}}></View>
            <View>
                <TouchableOpacity style={[styles.button,styles.container]} onPress={signup} >
                    <Text style={styles.buttonText}>Signup</Text>
                </TouchableOpacity>
            </View>
            <Text style={{color: error!=="" ?'red' : 'green', textAlign: 'center', marginTop: 5}}>{error || success}</Text>
            </View>
        </ScrollView>
    )
}

