import React from 'react';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity } from 'react-native';

const index8 = (props) => {
    const { navigation, route } = props;
    const { navigate, goBack } = navigation;
    return (

        <View style={styles.container}>

            <Image style={styles.bigEye} source={require('../imgs/bigeye.svg')} />

            <View style={styles.editUser}>
                <Image style={styles.imgUser} source={require('../imgs/group3.svg')} />
                <TextInput
                    style={styles.inputUser}
                    placeholder='Please input user name'
                />
            </View>
            <View style={styles.editPass}>
                <Image style={styles.imgLockPass} source={require('../imgs/group5.png')} />
                <TextInput
                    style={styles.inputPass}
                    placeholder='Please input password'
                />
            </View>
            <View style={styles.text2}>
                <Text
                    style={styles.text3}
                    onPress={() => navigate("index6")}
                >
                    Register
                </Text>
                <Text
                    style={styles.text3}
                    onPress={() => navigate("index3")}
                >
                    Forgot Password
                </Text>
            </View>
            <TouchableOpacity
                style={styles.btnRegis}
                onPress={() => navigate("index5")}
            >
                <Text style={styles.textOfBtnRegis}>LOGIN</Text>
            </TouchableOpacity>
            <View style={styles.viewOfText4}>
                <View style={styles.bgOfText4}></View>
                <Text style={styles.text4}>Other Login Methods</Text>
            </View>
            <View style={styles.orthermethod}>
                <Image style={styles.imgMethod} source={require('../imgs/group8.svg')} />
                <Image style={styles.imgMethod} source={require('../imgs/group9.svg')} />
                <View style={styles.viewOfFb}>
                    <Image style={styles.imgMethodFb} source={require('../imgs/brandico_facebook.png')} />
                </View>
            </View>
        </View>

    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    bigEye: {
        top: 40,
        width: 160,
        height: 160
    },
    text1: {
        width: '100%',
        height: 29,
        top: 100,
        left: 30,
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 25,
        lineHeight: 29.3,
    },
    editUser: {
        top: 70,
        flexDirection: "row",
        width: 330,
        height: 54,
        backgroundColor: '#FFFFFF',
        paddingRight: 0,
        paddingLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: '#D2D2D2'
    },
    inputUser: {
        flex: 1,
        height: '100%',
        marginLeft: 10,
        color: '#D2D2D2'
    },
    imgUser: {
        width: 32,
        height: 32,
        justifyContent: "center",
        alignItems: 'center',
        paddingLeft: 10,

    },
    editPass: {
        top: 90,
        flexDirection: "row",
        width: 330,
        height: 54,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 30,
        borderBottomWidth: 1,
        borderColor: '#D2D2D2',
    },
    inputPass: {
        flex: 1,
        height: '100%',
        marginLeft: 10,
        color: '#D2D2D2'
    },
    imgLockPass: {
        width: 32,
        height: 32,
        justifyContent: "center",
        alignItems: 'center',
        paddingLeft: 10

    },

    btnRegis: {
        width: 330,
        height: 45,
        top: 120,
        borderRadius: 10,
        backgroundColor: '#386FFC',
        justifyContent: "center",
        alignItems: "center"
    },
    textOfBtnRegis: {
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: 18,
        lineHeight: 21.09,
        color: '#FFFFFF'
    }, text2: {
        top: 210,
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between'

    },
    text3: {
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: 18,
        lineHeight: 21.09
    },

    viewOfText4: {
        top: 520,
        width: 300,
        height: 21,
        position: 'absolute'
    }
    ,
    bgOfText4: {
        borderWidth: 1,
        borderColor: '#0E18F5',
        position: 'relative',
        top: 12

    },
    text4: {
        width: 168,
        left: '22%',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: 18,
        lineHeight: 21.09,
        textAlign: 'center',
        backgroundColor: '#FFFFFF'
    },
    orthermethod: {
        top: 235,
        flexDirection: 'row',
        width: 330,
        justifyContent: 'space-between'
    },
    imgMethod: {
        width: 74,
        height: 74
    },
    viewOfFb: {
        width: 74,
        height: 74,
        backgroundColor: '#3A579C',
        justifyContent: 'center',
        alignItems: 'center'

    },
    imgMethodFb: {
        width: 32,
        height: 45,
    }

})

export default index8;