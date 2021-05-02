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
            // flex: 1,
            // paddingLeft: 0,
            // paddingRight: 0,
            // backgroundColor:'#edf0f2',
            paddingHorizontal: 20
        }}>
            <View style={{marginTop:100}}>
                <Text style={[styles.heading,{marginBottom:'10%'}]}>Login</Text>
                <Image
                    style={styles.image}
                    source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGnQjwlnpoWL6tGPNtqMrlylwEKupNdilyTh-KpvHd_mQEahNy1FS8RvYfKUf-xX0iBCw&usqp=CAU'}}
                />
                <View style={[styles.SectionStyle,styles.shadows]}>
                    <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSMbK0UEgePB2PoFdTbDpZHR04ICjHKoLbi4XuHGdJCzxKmMvG4qJf24cpUEVWdkk_AiI&usqp=CAU'}} style={styles.ImageStyle} />
                    <TextInput
                        style={{flex:1}}
                        placeholder="Email or Phone No."
                        underlineColorAndroid="transparent"
                    />
                </View>
                <View style={[styles.SectionStyle,styles.shadows]}>
                    <Image source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8AAACcnJzw8PCNjY2EhITGxsa1tbX19fWurq7m5ubZ2dn7+/uQkJDv7+/MzMzAwMBcXFwSEhLS0tImJiZ1dXVTU1NNTU09PT0sLCyWlpaoqKgcHBzo6Og5OTmhoaFFRUVnZ2dxcXEXFxdjY2MjIyN9fX0LCwtBQUEyMjJ6EmDcAAAGqElEQVR4nO2di2LqIAyGxTqttVov0znndTe393/Bs9mz42YNUEgg3cn3AIVfCwkJSVstQRAEQRAEQRAEQQhIng1mRb+kOxtkeewJYbIZ7ybLW/WT2+WkPc5iTw2BpPeqdMx7o9hT9CAvOlutvJL3m24zX9ls+G4hr+S+M4g93dr09tbySpb9Jv2RabumvJJVEnviliSrqZPADzpN2HbyobO+k8Y0tgATYx95J3qxJWjJJt4ClVow9gPcNpgqq9hCADZvSAKV2rL8G/1X4HcYrsYOqkClbmILuiBZIAtU6m4TW9R3sjW6wA8Y+aoDCn0fzGIL+6IgEqjUOLa0ki6ZQCZbKq6VuOQhtjzKV7Qk+otKtcmcibzdjEjMxE+ienD5S93prte1f5NpzCPjnfU0j4v5rhhkWZqmWTaYPcwX9gflt3gCV5ZT3A9n1RBMMhva/kDRfFS7bfS4gh3MUdvun4y0oaZPFnNbdA1PKazCAnEiVBZTuyssnjOzeRC5miv0jdNam/6/L2b3xme1SbVcZWScVJ39wbxnhbeKc8OMtvVOd5kpC/BMpANkZpjQoXYWQp+FU8r2lcfCEFdziQc+6B95i65Bi2GbcbNfBvsaNIqa6+fi+kIZXv2QRnGnnYmNEbyO/iw2RFRgINfaL58tQfsvPoU7ZGhXYd/r0dqYyA5p/maWmln47ge6HfU2VCJc9zsvvJ9+0Dw9VOhNZwv9l4oubhDIJmYagRgHOd1uEybQr8mDvqIMoEljhTnta0wFznWRHD74P6EMYEDzEmEFqDVbWQj/+wYc/R5tDPgo9Yg2BkgO31bDixfB78kT/b0p2HV8RxwFjjO6O722wE43ZpoIXokdxFGu8wgNvUb1i8G14O80mThCQ+PYwi9go0vtm8LLEDcLBjtO1PYCdP2xbTF4f5o6mHEINTD4U1KHv8HsH3aqdgMNpJAHuiTcuGDehzYgBW40E/ShwKA6rc0H787gZ07AYBDtQR8cFv/GBGgvaNNQ4MEC/yIhmNyiPV48A6MSuPzgIYbWb4N8/j3BWFBqeEkw1hkoUnogGAvaTDFPaVWgN4dibUBr/oXU94aiULgHi5IhMBbuMe0SSCFFlA86QE0pnZoUckspHH7I9pIqzC+reX+dQhZvKe06hM6lFDsNFNynzbFB9jCktaC1h1AwOqTF3xKMdQYq/tkTjBXHazsAo07xPe8U2tVoPW/whl3A0xPFrnamBw07ThNkwOwMbZEJdf2IDbRXouEYXziIc/mx5SnqxAW4DgNCuQ7zQ2x1JyZk/2JuXyJDyzuR753btNMJwz2NRIyOEFiQJKCwC+79IHBs6Esp64GfnzGXtYRlii2Qtp7ZBWyzyGcf/QL5rqmpRCYGuJcyeG2kJXNUhXjNdfBANfvmUrwYYBbscVyGuEdhc71oDDAT+vo6p1hg1kHZFt6HBTNZwtFYiEJRKAo5wE7h+rlfZKPWaFP0n2v3tbkGM4X78Xc3Mu0ixO1YKVxXr0yOvaMGnBRenwt0JaiBCqHiZ88cAR+FcFjML4DHRqHukON1LOOiUH/G8TmXMVFouodi6nPDX6EpY+uRVeah0BwQc7cZPBSa79mkzVZo093J1D6Jt0Kb+hbnGywsFFoFbZus8MXq6XU/Z8JJoV2TNdeFyEGhXWm5a6ySg0K7mK3rRyNEYQiFdnNw9Wo4KLS7/g13S+Gv0K5IX9c6jLvC32/xrZKYzud8Fgptitib7XlbnJ4MfTTZKzRbRPePRPFQaCzEAEsaG6PQ5Hw7r0I2Cg3dPn1uBHJRqG0ooevB2ByFmoCil0BGCkG771ljxEghENn3vYfESeG1z/1tXMMzPBVeCSv6fwhLFIpCUSgKRaEoFIWiUBSKQlH4/ymsRmt+m8Jq3NTwAavGKaw2kvIII7JUeKx0evAvnealsPIlI4QeIswUXuRo3PMxZ7gpXP54T6GmYXXgplBtz/0OE+842yfsFCrVKTUmSOWMDBUqdTd/nWO8oCdYKkQFU6FvdQsNmArdM9GUYFY6+/uQFGBWq/ufAyjA/IQAh1Z7VTC7RqRQh+SY4HYUPcSWcwXcj4bwa6Lk+0nXS1L4k4TRQG7rzc+rwe7YhnGewwW9czG3Bi4Efe7RjgQo7PEFtkacbOIRv/d0y/eKFi74H186waERdAlZO+gBj/aQU6J/8JOEQ5/dJcka/Ed8o0H9hcdW2nG/mO3P9Ib224B/NY4f46zHl8ce/feO/5InRW/XDkqvO6L+iqwgCIIgCIIgCIIgCIIgCDr+AFtEeXjKrOQrAAAAAElFTkSuQmCC'}} style={styles.ImageStyle} />
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

