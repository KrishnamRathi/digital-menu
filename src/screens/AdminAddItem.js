import React,{useState} from 'react'
import { View, Text,TextInput,StyleSheet,Picker,ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from '../styles/styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Radio from '../components/Radio';

const AdminAddItem = () => {
    const [selectedValue, setSelectedValue] = useState("italian");

    return (
        <ScrollView style={{marginTop:'20%'}}>
            <Text style={[styles.heading,{marginBottom:'10%'}]}>Add Item </Text>
            <View style={{flexDirection:'row', display:'flex'}}>
                <View style={[styles.SectionStyle, styles.shadows, my_styles.box]}>
                    <MaterialCommunityIcons name="food-variant" color='#F2A253' size={18} />
                    <TextInput
                        placeholder="Name"
                        underlineColorAndroid="transparent"
                    />
                </View>
                <View style={[styles.SectionStyle,styles.shadows,my_styles.box]}>
                    <TextInput
                        placeholder="Image"
                        underlineColorAndroid="transparent"
                    />
                </View>
            </View>
            <View style={{flexDirection:'row', display:'flex'}}>
                <View style={[styles.SectionStyle,styles.shadows,my_styles.box]}>
                    <MaterialCommunityIcons name="card-text" color='#F2A253' size={18} />
                    <TextInput
                        placeholder="Description"
                        underlineColorAndroid="transparent"
                    />
                </View>
                <View style={[styles.SectionStyle,styles.shadows,my_styles.box]}>
                    <FontAwesome name="rupee" color='#F2A253' size={18} />
                    <TextInput
                        placeholder="Price"
                        underlineColorAndroid="transparent"
                    />
                </View>
            </View>
            <View style={{flexDirection:'row', display:'flex'}}>
                <View style={[styles.SectionStyle,styles.shadows,my_styles.box]}>
                    <MaterialIcons name="category" color='#F2A253' size={18} />
                    {/* <TextInput
                        placeholder="Category"
                        underlineColorAndroid="transparent"
                    /> */}
                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Italian" value="italian" />
                        <Picker.Item label="Main Course" value="maincourse" />
                    </Picker>

                </View>
                <View style={[my_styles.radio]}>
                    <Radio/>
                </View>
            </View>
            <View style={{alignItems:'center',marginTop:'20%',height:'6.5%'}}>
                <TouchableOpacity style={[styles.button,styles.container]} >
                    <Text style={styles.buttonText}>Add </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default AdminAddItem

const my_styles = StyleSheet.create({
    box: {
        width:'43%',
        marginLeft:'4%',
        borderColor:'#F2A253',
        borderWidth:1,
        marginTop:'10%',
        height:'60%'
    },
    radio: {
        width:'43%',
        marginLeft:'4%',
        marginTop:'10%',
        height:'60%'
    }
  });