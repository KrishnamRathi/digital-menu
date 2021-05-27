import * as React from 'react';
import { View,Text } from 'react-native';
import { RadioButton } from 'react-native-paper';

const Radio = () => {
  const [checked, setChecked] = React.useState('first');

  return (
    <View style={{marginLeft:'10%'}}>
      <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
        <RadioButton
            value="first"
            status={ checked === 'first' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('first')}
            color='#42B77C'
        />
        <Text>Veg</Text>
      </View>
      <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
        <RadioButton
            value="second"
            status={ checked === 'second' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('second')}
            color='#E05D46'
        />
        <Text>Non-Veg</Text>
      </View>
    </View>
  );
};

export default Radio;