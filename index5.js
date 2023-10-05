import React from "react";
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity } from 'react-native';

const YourApp = () => {
    return (

        <View style={styles.container}>

            <Text style={styles.text1}>LOGIN</Text>
            <View style={styles.editEmail}>
                <Text style={styles.textEmail}>Email</Text>
                <TextInput
                    style={styles.inputEmail}
                />
            </View>
            <View style={styles.editPassword}>
                <Text style={styles.textPassword}>Password</Text>
                <TextInput
                    style={styles.inputPassword}
                />
                <Image style={styles.imgPassword} source={require('./assets/eye.png')} />
            </View>
            <TouchableOpacity style={styles.btnLogin}>
                <Text style={styles.textOfBtnLogin}>LOGIN</Text>
            </TouchableOpacity>
            <Text style={styles.text2}>When you agree to terms and conditions</Text>
            <TouchableOpacity style={styles.link}>
                <Text style={styles.textOfLink}>For got your password?</Text>
            </TouchableOpacity>
            <Text style={styles.text3}>Or login with</Text>
            <View style={styles.allIcon}>
                <View style={styles.editFacebook}>
                    <Image style={styles.iconFacebook} source={require('./assets/iconfacebook.png')} />
                </View>
                <View style={styles.editZalo}>
                    <Image style={styles.iconZalo} source={require('./assets/iconzalo.png')} />
                </View>
                <View style={styles.editGoogle}>
                    <Image style={styles.iconGoogle} source={require('./assets/icongoogle.png')} />
                </View>
            </View>

        </View>

    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#D8EFDF'
    },
    text1: {
        width: 120,
        height: 29,
        top: 80,
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 25,
        lineHeight: 29.3,
        textAlign: 'center'
    },
    editEmail: {
        top: 170,
        flexDirection: "row",
        width: 330,
        height: 54,
        backgroundColor: '#CAE1D1',
    },
    textEmail: {
        width: 80,
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: 18,
        textAlign: "center",
        top: '25%'
    },
    inputEmail: {
        flex: 1
    },
    editPassword: {
        top: 210,
        flexDirection: "row",
        width: 330,
        height: 54,
        backgroundColor: '#CAE1D1',
        paddingRight: 20
    },
    textPassword: {
        width: 85,
        height: 21,
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: 18,
        lineHeight: 21.09,
        textAlign: "center",
        top: '25%'
    },
    inputPassword: {
        flex: 1
    },
    imgPassword: {
        width: 40,
        height: 40,
        top: '10%',
        justifyContent: "center"

    },
    btnLogin: {
        width: 330,
        height: 45,
        top: 250,
        borderRadius: 2,
        backgroundColor: '#E53935',
        justifyContent: "center",
        alignItems: "center"
    },
    textOfBtnLogin: {
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 20,
        lineHeight: 23.44,
        color: '#FFFFFF'
    },
    text2: {
        top: 270,
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 16.41,
        color: '#000000'
    },
    link: {
        top: 280,
        width: 260,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    textOfLink: {
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 16.41,
        color: '#5D25FA'
    },
    text3: {
        top: 290,
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 16.41,
        alignItems: "center",
        color: '#000000'
    },
    allIcon: {
        flexDirection: "row",
        width: 328,
        height: 45,
        top: 330,
        borderRadius: 2,
        justifyContent: "space-around",
        alignItems: "center"
    },
    editFacebook: {
        height: 45,
        backgroundColor: '#275A8E',
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    editZalo: {
        height: 45,
        backgroundColor: '#1593C6',
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    editGoogle: {
        height: 45,
        backgroundColor: '#D8EFDF',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: '#41A2D7'
    },
    iconFacebook: {
        width: 30,
        height: 30,
    },
    iconZalo: {
        width: 25,
        height: 25,
        
    },
    iconGoogle: {
        width: 30,
        height: 30,
        
    }

})

export default YourApp;