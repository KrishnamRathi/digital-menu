
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
        // margin: 10,
        alignSelf: 'center'
    },
    button: {
        height: 40,
        width: 80,
        backgroundColor: '#F4A460',
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
        color:'#F4A460',
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
    // row: {
    //     flexDirection: 'row'
    // },
    // column: {
    //     flexDirection: 'column'
    // },
    // boxOutline: {
    //     justifyContent: 'space-between',
    //     marginTop: 10,
    //     padding: 5,
    //     borderBottomWidth: 1,
    //     borderColor: 'gray'
    // },
    // boldFont: {
    //     fontSize: 18,
    //     fontWeight: 'bold'
    // },
    // filterButton: {
    //     zIndex: 100,
    //     position: 'absolute',
    //     bottom: 100,
    //     height: 40,
    //     width: 80,
    //     borderRadius: 8,
    //     backgroundColor: '#178ae8',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    // filterFont: {
    //     fontSize: 15,
    //     fontWeight: 'bold',
    //     color: 'white'
    // },
    // add: {
    //     backgroundColor: '#178ae8',
    //     width: 40,
    //     height: 40,
    //     borderRadius: 1000,
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // },
    // addText: {
    //     color: 'black',
    //     fontSize: 18
    // },
    // minus: {
    //     backgroundColor: 'gray',
    //     width: 40,
    //     height: 40,
    //     borderRadius: 1000,
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // },
    // minusText: {
    //     color: 'black',
    //     fontSize: 18
    // },
    
    // label: {
    //     paddingLeft: 7,
    //     fontSize: 20,
    //     fontWeight: "bold",
    //     fontFamily:'Times New Roman',
    //     color: '#1e2620',
    //     marginBottom: 5
    // },
    // heading:{
    //     fontSize:50,
    //     fontWeight:'bold',
    //     color:'#F4A460',
    //     alignSelf: 'center'
    // },
    // langText:{
    //     fontSize: 30,
    //     fontWeight: "bold",
    //     fontFamily:'Times New Roman',
    //     color: '#1e2620',
    //     marginBottom: '2%',
    //     marginTop: '2%',
    //     paddingLeft: 15,
    //     paddingRight: 20,
    // },
    // labelProfile: {
    //     fontSize: 23,
    //     fontWeight: "bold",
    //     fontFamily:'Times New Roman',
    //     color: '#1e2620',
    //     marginTop: 15,
    //     marginBottom:5
    // },
    // drawerButton:{
    //     borderBottomWidth: 1,
    //     width: '80%',
    //     alignItems: 'center',
    //     borderBottomColor: 'gray',
    //     margin: 8,
    //     flexDirection: 'row',
    //     justifyContent: 'space-evenly'
    // },
    // drawerText: {
    //     fontSize: 20,
    //     color: 'black'
    // },
})