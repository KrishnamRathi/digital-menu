import React, { useState } from 'react'
import { View, Text, Modal, Pressable, StyleSheet, TouchableOpacity } from 'react-native'
import CheckBox from '../components/CheckBox'
import { styles as common } from '../styles/common';

const FilterModal = ({ setShow }) => {
    const [showModal, setShowModal] = useState(true);
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={showModal}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setShowModal(!showModal);
                setShow(false);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10}}>
                        <Text style={[common.fontSmall, {alignSelf: 'center'}]}>Veg</Text>
                        <CheckBox />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10}}>
                        <Text style={[common.fontSmall, {alignSelf: 'center'}]}>Non-Veg</Text>
                        <CheckBox />
                    </View>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => {setShowModal(!showModal), setShow(false)}}
                    >
                        <Text style={styles.textStyle}>Apply</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F2A253",
    },
    buttonClose: {
        backgroundColor: "#F2A253",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    }
});

export default FilterModal
