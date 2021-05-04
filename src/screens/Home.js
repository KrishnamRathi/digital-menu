import React from 'react';
import { useState } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { styles as common } from '../styles/common';


export default Home = () => {
  const [view, setView] = useState(0);

  if (view == 0)
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <Text style={common.fontSmallBold}>Click here to scan</Text>
        <TouchableOpacity style={{ backgroundColor: '#F2A253', borderRadius: 10, width: 80, alignItems: 'center' }} onPress={() => setView(1)}>
          <Text style={{ fontSize: 50, color: 'white', fontWeight: 'bold' }}>+</Text>
        </TouchableOpacity>
      </View>
    );
  else return <OpenScanner setView={setView}/>
}

const OpenScanner = ({setView}) => {
  const onSuccess = (e) => {
    alert(e.data);
  };
  return (
    <QRCodeScanner
      onRead={(e) => onSuccess(e)}
      showMarker={true}
      markerStyle={{borderColor: 'red', borderRadius: 10}}
      cameraStyle={{height: '100%'}}
      topContent={
        <View style={{width: '100%', zIndex: 1000}}>
          <TouchableOpacity onPress={() => setView(0)} style={[{alignItems: 'flex-start', margin: 20}, common.shadow]}>
            <Image source={require('../assets/icons/back.png')} style={{borderRadius: 10, height: 50, width: 50}}/>
          </TouchableOpacity>
        </View>
      }
    />
  )
}