import { StyleSheet } from 'react-native';
import * as FONT from 'src/assets/fonts'

export default styles = StyleSheet.create({
    containerStyle: {
        marginTop: 20,
        height: 70,
        width: '90%',
        alignSelf: 'center',
    },
    extraPadding: {
        borderColor: '#CACACA',
        borderWidth: 0.5
    },
    textInput: {
        height: 40,
        paddingLeft: 10,
    },
    placeHolder: {
        color: '#8D8E90',
        position: 'absolute',
        marginTop: 2,
        fontSize: 10,
        paddingLeft: 15
    },
    mainContainer: {
        height: 80,
        width: '80%',
        marginBottom: 15,
        flexDirection: 'column'
    },
    placeholderText: {
        fontFamily: FONT.ROBOTO,
        fontSize: 15,
        fontWeight: "bold",
        color: '#8D8E90',
        marginBottom: 10,
    },
    placeHolderStyle: {
        fontFamily: FONT.ROBOTO,
        fontStyle: 'italic',
        fontSize: 15
    }
});
