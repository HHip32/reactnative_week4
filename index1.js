import React from 'react';
import { StyleSheet, Image, Text, View, Alert, TouchableOpacity } from 'react-native';

const YourApp = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('./assets/logo.png')} />
            <Text style={styles.text1}>GROW {'\n'} YOUR BUSINESS</Text>
            <Text style={styles.text2}>We will help you to grow your business using {'\n'} online server</Text>
            <View style={styles.textEdit}>
                <TouchableOpacity
                    style={[styles.button]}
                    onPress={() => Alert.alert('Login button pressed')}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button]}
                    onPress={() => Alert.alert('Sign Up button pressed')}
                >
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgb(0, 204, 249)'
    },
    logo: {
        top: 105,
        width: 140,
        height: 140,
    },
    text1: {
        top: 160,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center'
    },
    text2: {
        top: 250,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center'
    },
    textEdit: {
        top: 300,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%'
    },
    button: {
        backgroundColor: '#E3C000',
        borderRadius: 10, // Điều này tạo viền cong cho nút
        paddingVertical: 10, // Điều này làm cho nút to ra
        width: '40%', // Điều này xác định chiều rộng của nút
        borderWidth: 2, // Điều này tạo đường viền cho nút
        borderColor: 'transparent', // Điều này để đảm bảo viền ban đầu là trong suốt
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})

export default YourApp;
