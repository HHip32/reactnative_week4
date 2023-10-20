import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
const Stack = createNativeStackNavigator();
import index1 from './components/screens/index1';
import index2 from './components/screens/index2';
import index3 from './components/screens/index3';
import index4 from './components/screens/index4';
import index5 from './components/screens/index5';
import index6 from './components/screens/index6';
import index7 from './components/screens/index7';
import index8 from './components/screens/index8';


const YourApp = () => {
    const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
    const [fontsLoaded, error] = useFonts({
        "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
        "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    });
    if (!fontsLoaded && !error) {
        return null;
    }
    return (
        <>
            <NavigationContainer>
                {hideSplashScreen ? (
                    <Stack.Navigator
                        initialRouteName="index7"
                        screenOptions={{ headerShown: false }}
                    >
                        <Stack.Screen name="index1" component={index1} />
                        <Stack.Screen name="index2" component={index2} />
                        <Stack.Screen name="index3" component={index3} />
                        <Stack.Screen name="index4" component={index4} />
                        <Stack.Screen name="index5" component={index5} />
                        <Stack.Screen name="index6" component={index6} />
                        <Stack.Screen name="index7" component={index7} />
                        <Stack.Screen name="index8" component={index8} />
                    </Stack.Navigator>
                ) : null}
            </NavigationContainer>
        </>

    );
};

export default YourApp;