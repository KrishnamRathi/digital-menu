import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    },
    fontSmall: {
        fontSize: 16,
        color: 'black'
    },
    fontSmallBold: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    fontLarge: {
        fontSize: 25,
        color: 'black'
    },
    fontLargeBold: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    },
    secondaryText: {
        fontSize: 12,
        color: '#BCBCBC'
    },
    veryLargeFontBold: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black'
    },
    buttonText: {
        backgroundColor: '#F2A253',
        borderRadius: 10,
        width: 200,
        height: 50,
        textAlign: 'center',
        color: 'white'
    }
})
