import React,{useState} from 'react'
import { Text, View ,TextInput,ScrollView, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import auth from '@react-native-firebase/auth';
import { styles } from '../styles/styles'
import InputBox from '../components/InputBox'

export default function SignupScreen({navigation}) {
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [confirm, setConfirm] = useState(null);

    const validatePhoneNumber = () => {
      var regexp = /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{8,16})$/
      return regexp.test('+917067709291')
    }
    const handleSendCode = () => {
      // Request to send OTP
      if (validatePhoneNumber()) {
        auth()
          .signInWithPhoneNumber('+918435912066')
          .then(confirmResult => {
              alert('confirm')
              setConfirm(confirmResult)
              confirmResult.confirm('123456').then((user)=>alert(user.name))
              navigation.navigate("Otp",{confirms:confirm})
          })
          .catch(error => {
            alert(error.message)
            console.log(error)
          })
      } else {
        alert('Invalid Phone Number')
      }
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
            <InputBox image='../assets/icons/name.png' />
            <View style={[styles.SectionStyle,styles.shadows]}>
                    <Image source={require("../assets/icons/name.png")} style={styles.ImageStyle} />
                    <TextInput
                        style={{flex:1}}
                        placeholder="Name"
                        underlineColorAndroid="transparent"
                        onChange={(val)=>setName(val)}
                    />
            </View>
            {/* <View style={[styles.SectionStyle,styles.shadows]}>
                    <Image source={require("../assets/icons/email.png")} style={styles.ImageStyle} />
                    <TextInput
                        style={{flex:1}}
                        placeholder="Email"
                        underlineColorAndroid="transparent"
                    />
            </View> */}
            <View style={[styles.SectionStyle,styles.shadows]}>
                    <Image source={require("../assets/icons/phone.png")} style={styles.ImageStyle} />
                    <TextInput
                        keyboardType="numeric"
                        style={{flex:1}}
                        placeholder='Mobile No.'
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
                </View>
                <View style={[styles.SectionStyle,styles.shadows]}>
                    <Image source={require("../assets/icons/lock.png")} style={styles.ImageStyle} />
                    <TextInput
                        style={{flex:1}}
                        placeholder="Confirm Password"
                        underlineColorAndroid="transparent"
                        secureTextEntry={true}
                    />
                </View> */}
            <TouchableOpacity 
                onPress={() => navigation.navigate('Login')}
                style={{alignSelf:'center'}}
            >
                <Text>Already have an account? Sign In </Text>
            </TouchableOpacity>
            <View style={{marginTop: '4%'}}></View>
            <View>
                <TouchableOpacity style={[styles.button,styles.container]} onPress={() => handleSendCode()} >
                    <Text style={styles.buttonText}>Signup</Text>
                </TouchableOpacity>
            </View>
            </View>
        </ScrollView>
    )
}
