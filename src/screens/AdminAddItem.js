import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, ScrollView, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from '../styles/styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Radio from '../components/Radio';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import {Picker} from '@react-native-picker/picker';
import { useDispatch } from 'react-redux';
import {setLoadingTrue, setSuccessMessage, setErrorMessage} from '../redux/actions'


const AdminAddItem = () => {
    const dispatch = useDispatch();
    const [category, setCategory] = useState("Italian");
    const [name, setName] = useState(null);
    const [description, setDescription] = useState(null);
    const [price, setPrice] = useState(null);
    const [veg, setVeg] = useState(null);
    const [image, setImage] = useState(null);
    const restaurant = '1';

    const selectImage = () => {
        try {
            ImagePicker.openPicker({
                cropping: true
            }).then(data => {
                setImage(data.path.replace("file://", ""))
            })
                .catch(err => {
                    console.log(err);
                })
        } catch (err) {
            console.log(err);
        }
    }

    const addItem = async () => {
        try {
            dispatch(setLoadingTrue());
            const reference = storage().ref(`${restaurant}/${name}.jpg`);
            await reference.putFile(image)
            .then(() => {
                console.log('Image uploaded to the bucket!');
            })
            .catch(() => {
                console.log('Error while uploading image!');
                dispatch(setErrorMessage("Adding dish failed!!"));
                return;
            });
            const url = await storage().ref(`${restaurant}/${name}.jpg`).getDownloadURL();
            console.log("Image Uploaded!!");
            var mess = null
            await firestore()
                .collection('Restaurant')
                .doc(restaurant)
                .update({
                    menu: firestore.FieldValue.arrayUnion({ name, price, description, category, image: url || "", id: url })
                })
                .then(() => {
                    console.log("Data updated successfully")
                    dispatch(setSuccessMessage("Dish added successfully!"));
                    mess ="Dish added successfully!"
                    alert(mess)
                    setName(null)
                    setDescription(null)
                    setImage(null)
                    setPrice(null)
                    return;
                })
                .catch(err => {console.log(err); dispatch(setErrorMessage("Adding dish failed!!")) });
                if(!mess) alert("Adding dish failed!!")
        } catch (err) {
            console.log(err);
            dispatch(setErrorMessage("Adding dish failed!!"));
            alert("Adding dish failed!!")
        }
    }


    return (
        <ScrollView style={{ marginTop: '20%' }}>
            <Text style={[styles.heading, { marginBottom: '10%' }]}>Add Item </Text>
            <View style={{ flexDirection: 'row', display: 'flex' }}>
                <View style={[styles.SectionStyle, styles.shadows, my_styles.box]}>
                    <MaterialCommunityIcons name="food-variant" color='#F2A253' size={18} />
                    <TextInput
                        placeholder="Name"
                        underlineColorAndroid="transparent"
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
                </View>
                <View style={[styles.SectionStyle, styles.shadows, my_styles.box]}>
                    <TouchableOpacity style={{ display: 'flex', flexDirection: 'row' }} onPress={selectImage}>
                        <MaterialCommunityIcons name="camera" size={18} color='#F2A253' />
                        <Text style={{ marginLeft: '4%' }}>{image ? 'Selected' :'Select Image'}</Text>
                    </TouchableOpacity>
                    {image? <Image source={{uri: `file://${image}`}} style={{height: 50, width: 50, borderRadius: 10, marginHorizontal: '10%'}}/> : null}
                </View>
            </View>
            <View style={{ flexDirection: 'row', display: 'flex' }}>
                <View style={[styles.SectionStyle, styles.shadows, my_styles.box]}>
                    <MaterialCommunityIcons name="card-text" color='#F2A253' size={18} />
                    <TextInput
                        placeholder="Description"
                        underlineColorAndroid="transparent"
                        value={description}
                        onChangeText={(text) => setDescription(text)}
                    />
                </View>
                <View style={[styles.SectionStyle, styles.shadows, my_styles.box]}>
                    <FontAwesome name="rupee" color='#F2A253' size={18} />
                    <TextInput
                        placeholder="Price"
                        underlineColorAndroid="transparent"
                        value={price}
                        onChangeText={(text) => setPrice(text)}
                    />
                </View>
            </View>
            <View style={{ flexDirection: 'row', display: 'flex' }}>
                <View style={[styles.SectionStyle, styles.shadows, my_styles.box]}>
                    <MaterialIcons name="category" color='#F2A253' size={18} />
                    {/* <TextInput
                        placeholder="Category"
                        underlineColorAndroid="transparent"
                    /> */}
                    <Picker
                        selectedValue={category}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
                    >
                        <Picker.Item label="Italian" value="Italian" />
                        <Picker.Item label="Chinese" value="Chinese" />
                        <Picker.Item label="Beverages" value="Beverages" />
                        <Picker.Item label="South Indian" value="South Indian" />
                        <Picker.Item label="Mexican" value="Mexican" />
                        <Picker.Item label="Others" value="Others" />
                    </Picker>

                </View>
                <View style={[my_styles.radio]}>
                    <Radio />
                </View>
            </View>
            <View style={{ alignItems: 'center', marginTop: '20%', height: '6.5%' }}>
                <TouchableOpacity style={[styles.button, styles.container]} onPress={addItem}>
                    <Text style={styles.buttonText}>Add </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default AdminAddItem

const my_styles = StyleSheet.create({
    box: {
        width: '43%',
        marginLeft: '4%',
        borderColor: '#F2A253',
        borderWidth: 1,
        marginTop: '10%',
        height: '60%',
        justifyContent: 'flex-start',
        paddingLeft: '4%'
    },
    radio: {
        width: '43%',
        marginLeft: '4%',
        marginTop: '10%',
        height: '60%'
    }
});