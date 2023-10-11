import React from "react";
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity } from 'react-native';

const index3 = (props) => {
    const { navigation, route } = props;
    const { navigate, goBack } = navigation;
    return (

        <LinearGradient
            colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#00CCF9']}
            style={styles.linearGradient}
        >
            <Image style={styles.logo} source={require('../imgs/lock.png')} />
            <Text style={styles.text1}>FORGET PASWORD</Text>
            <Text style={styles.text2}>Provide your account's email for which you want to reset your password</Text>
            <View style={styles.editEmail}>
                <Image style={styles.mailImage} source={require('../imgs/mail.png')} />
                <TextInput
                    style={styles.inputStyle}
                    underlineColorAndroid={"transparent"}
                />
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigate("index4")}
            >
                <Text
                    style={styles.text3}
                >
                    NEXT
                </Text>
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
    logo: {
        width: '105px',
        height: '117px',
        top: '76px'
    },
    text1: {
        top: '120px',
        width: '133px',
        height: '58px',
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: '25px',
        textAlign: "center",
        lineHeight: '29.3px'
    },
    text2: {
        width: '302px',
        height: '53px',
        top: '170px',
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: '15px',
        lineHeight: '17.58px',
        textAlign: "center"

    },
    editEmail: {
        top: '200px',
        width: '305px',
        height: '45px',
        flexDirection: "row",
        borderWidth: 1,
        padding: 0,
        backgroundColor: '#C4C4C4',

    }
    ,
    mailImage: {

        width: '48px',
        height: '43px'
    },
    inputStyle: {
        flex: 1,
    },
    button: {
        top: '240px',
        width: '305px',
        height: '45px',
        backgroundColor: '#E3C000',
        justifyContent: "center",
        alignItems: "center"
    },
    text3: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: '18px',
        lineHeight: '21.09px',

    }


});


export default index3;