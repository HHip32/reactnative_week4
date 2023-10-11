import React from "react";
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';

const index2 = (props) => {
    const { navigation, route } = props;
    const { navigate, goBack } = navigation;
    return (
        <LinearGradient
            colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#00CCF9']}
            style={styles.linearGradient}
        >
            <Image style={styles.logo} source={require('../imgs/logo.png')} />
            <Text style={styles.text1}>GROW {'\n'} YOUR BUSINESS</Text>
            <Text style={styles.text2}>We will help you to grow your business using online server</Text>
            <View style={styles.viewOfButton}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigate("index5")}
                >
                    <Text style={styles.textOfButton}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigate("index6")}
                >
                    <Text style={styles.textOfButton}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
            <Text
                style={styles.text3}
                onPress={() => navigate("index6")}
            >
                HOW WE WORK?
            </Text>

        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        alignItems: "center",
    }
    ,
    logo: {
        top: 100,
        width: 142,
        height: 142
    },
    text1: {
        top: 180,
        fontFamily: 'Roboto',
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 25
    },
    text2: {
        top: 220,
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 15,
        textAlign: "center",
        width: '80%'
    },
    viewOfButton: {
        flexDirection: "row",
        justifyContent: "space-between",
        top: 280,
        width: '80%'
    },
    button: {
        backgroundColor: '#E3C000',
        width: 130,
        height: 40,
        justifyContent: "center"

    },
    textOfButton: {
        textAlign: "center",
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 18,
        color: '#000000'
    },
    text3: {
        top: 320,
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 18,
        textAlign: "center"
    }

});


export default index2;