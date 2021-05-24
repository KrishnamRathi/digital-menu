import React,{useState,useRef,useEffect} from 'react'
import { Text,View ,StyleSheet,TextInput,ScrollView } from 'react-native';
import {styles} from '../styles/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Otp = ({route,navigation}) => {
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const [v1, setV1] = useState("");
    const [v2, setV2] = useState("");
    const [v3, setV3] = useState("");
    const [v4, setV4] = useState("");
    const [error, setError] = useState(false);
    const [errmess, setErrmess] = useState("");
    const [time, setTime] = useState(60000);

    const handleVerifyCode = ({navigation}) => {
        // Request for OTP verification
        if (verificationCode.length == 6) {
            route.params.confirms.confirm(verificationCode)
            .then(user => {
                // this.setState({ userId: user.name })
                alert(`Verified! ${user.name}`)
            })
            .catch(error => {
                alert(error.message)
                console.log(error)
            })
        } else {
            alert('Please enter a 6 digit OTP code.')
        }
    }

    const handleSignin = () => {
        const otp = v1 + v2 + v3 + v4;
        // console.log(otp)
        if (otp.length !== 4) {
            if(error==false)setErrmess("Please enter a valid 4 digit OTP!")
            return setError(true);
        }
        for (var i = 0; i < otp.length; i++) {
            if (isNaN(otp[i])) {
                if(error==false)setErrmess("Please enter a valid 4 digit OTP!");
                return setError(true);
            }
        }
        // handleVerifyCode(otp+"56");
        navigation.navigate('Menu')
        // verifyOtp(otp, mobile_no, () => { router.push('/') }, () => {
        //     setError(true);
        //     setErrmess("Invalid OTP!");
        // });
    }
    useEffect(() => {
        setTimeout(() => {
            if (time !== 0) setTime(time - 1000)
            else { setTime(0); setError(true); setErrmess("OTP expired!") }
        }, 1000)
    }, [time])
    function msToMin(time) {
        if (time == 60000) {
            return "01:00";
        }
        const sec = Math.floor(time / 1000);
        if(sec<10)return `00:0${sec}`;
        return `00:${sec}`;
    }

    return (
        <ScrollView style={{
            paddingHorizontal: 20
        }}>
            <Text style={[styles.heading,{marginBottom:'10%',marginTop:100}]}>Enter Otp  </Text>
            <View style={style.otp}>
                <View style={[style.button,styles.shadows]}>
                    <TextInput style={{flex:1}} keyboardType = 'numeric' underlineColorAndroid="transparent" onChangeText={(val) => { setV1(val); ref2.current.focus() }} maxLength={1} style={style.text}/>
                </View>
                <View style={[style.button,styles.shadows]}>
                    <TextInput keyboardType = 'numeric' underlineColorAndroid="transparent" onChangeText={(val) => { setV2(val); ref3.current.focus() }} ref={ref2} maxLength={1} style={style.text} />
                </View>
                <View style={[style.button,styles.shadows]}>
                    <TextInput keyboardType = 'numeric' underlineColorAndroid="transparent" onChangeText={(val) => { setV3(val); ref4.current.focus() }} ref={ref3} maxLength={1} style={style.text} />
                </View>
                <View style={[style.button,styles.shadows]}>
                    <TextInput keyboardType = 'numeric' underlineColorAndroid="transparent" onChangeText={(val) => setV4(val) } ref={ref4} maxLength={1} style={style.text} />
                </View>
            </View> 
            <Text style={{ color: 'black', alignSelf: 'center', fontSize: 25 }}>{msToMin(time)}</Text>
            {error ? <View style={{ display: 'flex', justifyContent: 'center',alignSelf:'center',marginTop:10 }}>
                    <Text style={{ color:'red' }}>{errmess}</Text>
                </View> : <View style={{ height: 10 }} />}
            <TouchableOpacity style={[styles.button,styles.container,{marginTop:50}]} onPress={() => handleSignin()} >
                <Text style={styles.buttonText}>Verify Otp</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    otp:{
        display:'flex',
        flexDirection:'row',
        margin:30,
        justifyContent:'space-around'
    },
    button:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#000',
        height: 55,
        borderRadius: 5,
        marginBottom: 10,
        marginTop: 20,
        width:40,
    },
    text:{
        textAlign: 'center', 
        fontSize: 20, 
    },
});

export default Otp
