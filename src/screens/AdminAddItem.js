import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Picker, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from '../styles/styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Radio from '../components/Radio';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';


const AdminAddItem = () => {
    const [category, setCategory] = useState("italian");
    const [name, setName] = useState(null);
    const [description, setDescription] = useState(null);
    const [price, setPrice] = useState(null);
    const [veg, setVeg] = useState(null);
    const [image, setImage] = useState(null);

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
            const reference = storage().ref('image.jpg');
            const task = reference.putFile(image);
            console.log("Uploading ...")
            task.then(() => {
                console.log('Image uploaded to the bucket!');
            });
            task.catch(() => {
                console.log('Error while uploading image!');
            })
            const url = await storage().ref('image.jpg').getDownloadURL();
            setImage(url)
            console.log(url);
            await firestore()
                .collection('Restaurant')
                .doc('1')
                .update({
                    menu: firestore.FieldValue.arrayUnion({ name, price, description, category, image, id: 100 })
                })
                .then(() => {
                    console.log("Data updated successfully")
                })
                .catch(err => console.log(err));
        } catch (err) {
            console.log(err);
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
                        <Text style={{ marginLeft: '4%' }}>Select Image</Text>
                    </TouchableOpacity>
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
                        <Picker.Item label="Italian" value="italian" />
                        <Picker.Item label="Main Course" value="maincourse" />
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