import React from 'react';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import { useState } from 'react';

const index6 = (props) => {
    const [current, setCurrent] = useState("test");
    const { navigation, route } = props;
    const { navigate, goBack } = navigation;
    return (

        <View style={styles.container}>

            <Text style={styles.text1}>REGISTER</Text>
            <View style={styles.editName}>
                <Text style={styles.textName}>Name</Text>
                <TextInput
                    style={styles.inputName}
                />
            </View>
            <View style={styles.editPhone}>
                <Text style={styles.textPhone}>Phone</Text>
                <TextInput
                    style={styles.inputPhone}
                />
            </View>
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
                <Image style={styles.imgPassword} source={require('../imgs/eye.png')} />
            </View>
            <View style={styles.editBirth}>
                <Text style={styles.textBirth}>Birthday</Text>
                <TextInput
                    style={styles.inputBirth}
                />
            </View>
            <View style={styles.radio}>
                <RadioButtonGroup
                    containerStyle={styles.btnGroup}
                    selected={current}
                    onSelected={(value) => setCurrent(value)}
                    radioBackground="black"
                >
                    <RadioButtonItem value="test2" style={{ marginHorizontal: "20px", color: "#000", borderColor: "#000" }}
                        label={
                            <Text style={{ fontWeight: "500" }}>Male</Text>
                        }
                    />
                    <RadioButtonItem
                        value="Female"
                        style={{ marginHorizontal: "20px", color: "#000", borderColor: "#000" }}
                        label={
                            <Text style={{ fontWeight: "500" }}>Female</Text>
                        }
                    />
                </RadioButtonGroup>
            </View>
            <TouchableOpacity
                style={styles.btnRegis}
                onPress={() => navigate("index2")}
            >
                <Text style={styles.textOfBtnRegis}>REGISTER</Text>
            </TouchableOpacity>
            <Text style={styles.text2}>When you agree to terms and conditions</Text>

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
        width: 130,
        height: 29,
        top: 40,
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 25,
        lineHeight: 29.3,
        textAlign: 'center'
    },
    editName: {
        top: 70,
        flexDirection: "row",
        width: 330,
        height: 54,
        backgroundColor: '#CAE1D1',
    },
    textName: {
        width: 80,
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: 18,
        textAlign: "center",
        top: '25%'
    },
    inputName: {
        flex: 1
    },
    editPhone: {
        top: 90,
        flexDirection: "row",
        width: 330,
        height: 54,
        backgroundColor: '#CAE1D1',
    },
    textPhone: {
        width: 80,
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: 18,
        textAlign: "center",
        top: '25%'
    },
    inputPhone: {
        flex: 1
    },
    editEmail: {
        top: 110,
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
        top: 130,
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
    editBirth: {
        top: 150,
        flexDirection: "row",
        width: 330,
        height: 54,
        backgroundColor: '#CAE1D1',
    },
    textBirth: {
        width: 80,
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: 18,
        textAlign: "center",
        top: '25%'
    },
    inputBirth: {
        flex: 1
    },
    radio: {
        top: 170,
        width: 320,
        height: 45,
        flexDirection: "row",
        alignItems: "center",
    },
    btnGroup: {
        flexDirection: "row",
    },
    btnRegis: {
        width: 330,
        height: 45,
        top: 200,
        borderRadius: 2,
        backgroundColor: '#E53935',
        justifyContent: "center",
        alignItems: "center"
    },
    textOfBtnRegis: {
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 20,
        lineHeight: 23.44,
        color: '#FFFFFF'
    },
    text2: {
        top: 220,
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 16.41,
        color: '#000000'
    },

})

export default index6;