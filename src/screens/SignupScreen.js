import React from 'react'
import { StyleSheet, Text, View ,TextInput,ScrollView, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from '../styles/styles'

export default function SignupScreen({navigation}) {
    return (
        <ScrollView style={{
            flex: 1,
            alignSelf: 'stretch',
            // marginTop: '2%',
            paddingLeft: 20,
            paddingRight: 20,
            // backgroundColor:'#edf0f2'
            // alignItems: 'stretch'
            
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
                    />
            </View>
            <View style={[styles.SectionStyle,styles.shadows]}>
                    <Image source={require("../assets/icons/email.png")} style={styles.ImageStyle} />
                    <TextInput
                        style={{flex:1}}
                        placeholder="Email"
                        underlineColorAndroid="transparent"
                    />
            </View>
            <View style={[styles.SectionStyle,styles.shadows]}>
                    <Image source={require("../assets/icons/phone.png")} style={styles.ImageStyle} />
                    <TextInput
                        keyboardType="numeric"
                        style={{flex:1}}
                        placeholder='Mobile No.'
                        underlineColorAndroid="transparent"
                        onChangeText={(value) => {
                            if(isNaN(value)){alert('Not a valid number')}
                            // if(value.length!==10){alert('Not a valid number')}
                        }}
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
                <View style={[styles.SectionStyle,styles.shadows]}>
                    <Image source={require("../assets/icons/lock.png")} style={styles.ImageStyle} />
                    <TextInput
                        style={{flex:1}}
                        placeholder="Confirm Password"
                        underlineColorAndroid="transparent"
                        secureTextEntry={true}
                    />
                </View>
            <TouchableOpacity 
                onPress={() => navigation.navigate('Login')}
                style={{alignSelf:'center'}}
            >
                <Text>Already have an account? Sign In </Text>
            </TouchableOpacity>
            <View style={{marginTop: '4%'}}></View>
            <View>
                <TouchableOpacity style={[styles.button,styles.container]} >
                    <Text style={styles.buttonText}>Signup</Text>
                </TouchableOpacity>
            </View>
            </View>
        </ScrollView>
    )
}

