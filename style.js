'use strict';
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        padding: 15,
        paddingTop: 20,
        height: 200
    },


    head: {
        height: 40,
        fontFamily: 'cochin',
        backgroundColor: '#32325e'
    },
    text: {
        textAlign: 'left',
        padding: 10,
        color: '#000000',
        fontFamily: 'cochin',
        fontSize: 16
    },
    text_header: {
        textAlign: 'left',
        padding: 10,
        color: '#ffffff',
        fontFamily: 'cochin',
        fontSize: 16,
        fontWeight: 'bold'
    },
    textDate: {
        textAlign: 'center',
        padding: 10,
        color: '#000000',
        fontFamily: 'cochin',
        fontSize: 12
    },
    label: {
        textAlign: 'center',
        padding: 10,
        fontSize: 20,
        color: '#000000',
        fontFamily: 'cochin',
        fontWeight: 'bold'
    },
    text_highest: {
        textAlign: 'center',
        padding: 10,
        color: '#00FF00',
        fontFamily: 'cochin',
        fontSize: 16
    },
    text_small: {
        textAlign: 'center',
        padding: 10,
        color: 'red',
        fontFamily: 'cochin',
        fontSize: 16
    },
    table: {
        borderTopWidth: 2,
        borderColor: '#cfcfcf'
    },
    subtable: {
        flexDirection: 'row'

    },
    row: {
        width: 30
    },
    subtable_bottom: {
        borderWidth: 0.5,
        borderColor: '#cfcfcf',
        flexDirection: 'row'


    }
});
export default styles;

