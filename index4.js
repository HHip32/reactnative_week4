import React from "react";
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const YourApp = () => {
    return (

        <LinearGradient
            colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#00CCF9']}
            style={styles.linearGradient}
        >
            <Text style={styles.text1}>FORGET PASWORD</Text>
            <Text style={styles.text2}>VERIFICATION</Text>
            <Text style={styles.text3}>Enter ontime password sent on ++849092605798</Text>
            <View style={styles.verify}>
                <TextInput style={styles.input} />
                <TextInput style={styles.input} />
                <TextInput style={styles.input} />
                <TextInput style={styles.input} />
                <TextInput style={styles.input} />
                <TextInput style={styles.input} />
                <TextInput style={styles.input} />
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text4}>VERIFY CODE</Text>
            </TouchableOpacity>
        </LinearGradient>


    );
};

const styles = StyleSheet.create({

    linearGradient: {
        flex: 1,
        alignItems: "center",
    }
    ,
    text1: {
        top: '100px',
        width: '154px',
        height: '70px',
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: '30px',
        textAlign: "center",
        lineHeight: '29.3px'
    },
    text2: {
        top: '150px',
        width: '302px',
        height: '53px',
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: '20px',
        lineHeight: '23.44px',
        textAlign: "center"

    },
    text3: {
        top: '190px',
        width: '302px',
        height: '53px',
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: '15px',
        lineHeight: '17.58px',
        textAlign: "center"

    },
    text4: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: '18px',
        lineHeight: '21.09px',
        textAlign: "center"
    },
    verify: {
        top: '240px',
        width: '300px',
        height: '50px',
        flexDirection: "row",
        borderTopWidth: 1,
        borderLeftWidth: 1, 
        borderBottomWidth: 1
    },
    input: {
        width: '50px',
        height: '50px',
        borderRightWidth: 1,
        alignItems: "center",
        textAlign: "center",
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: '35px',
        lineHeight: '21.09px'
    }
    ,
    button: {
        top: '280px',
        width: '305px',
        height: '45px',
        backgroundColor: '#E3C000',
        justifyContent: "center",
        alignItems: "center"
    }



});


export default YourApp;