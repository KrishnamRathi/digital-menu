import React from 'react'
import { View, TextInput,Image } from 'react-native'
import { styles } from '../styles/styles'

const InputBox = ({image,setVal}) => {
    return (
        <View style={[styles.SectionStyle,styles.shadows]}>
            <Image source={require('../assets/icons/name.png')} style={styles.ImageStyle} />
            <TextInput
                style={{flex:1}}
                placeholder="Name"
                underlineColorAndroid="transparent"
                // onChange={(val)=>setName(val)}
            />
        </View>
    )
}

export default InputBox
