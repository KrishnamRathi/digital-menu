import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    content: {
        margin: 10
    },
    shadows: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    image: {
        height: 150,
        width: 120,
        borderRadius: 10,
        alignSelf: 'center'
    },
    button: {
        height: 40,
        width: 105,
        backgroundColor: '#F2A253',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10,
    },
    buttonText:{
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
    },
    textInput: {
        fontSize:17,
        fontFamily:'Times New Roman',
        height:57,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 19,
        marginBottom: '10%',
        backgroundColor:'white'
    },
    heading:{
        fontSize:50,
        fontWeight:'bold',
        color:'#F2A253',
        alignSelf: 'center'
    },
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#000',
        height: 55,
        borderRadius: 20,
        marginBottom: 10,
        marginTop: 20
    },
    ImageStyle: {
        padding: 10,
        margin: 5,
        height: 28,
        width: 28,
        resizeMode : 'stretch',
        alignItems: 'center'
    }
})