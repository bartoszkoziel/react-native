import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import * as SplashScreen from 'expo-splash-screen';

import Welcome from './components/Welcome';
import Camera from "./components/Camera"
import Gallery from "./components/Gallery"
import ImgView from "./components/ImgView"

const Stack = createNativeStackNavigator()
SplashScreen.preventAutoHideAsync();

export default function App({ navigation }) {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="welcome" component={Welcome} options={{ title: 'Camera app', headerStyle: { backgroundColor: '#f4511e' } }} />
                <Stack.Screen name="gallery" component={Gallery} options={{ title: 'Gallery', headerStyle: { backgroundColor: '#f4511e' } }} />
                <Stack.Screen name="imgview" component={ImgView} options={{ title: 'Camera app', headerStyle: { backgroundColor: '#f4511e' } }} />
                <Stack.Screen name="camera" component={Camera} options={{ title: 'Camera app', headerStyle: { backgroundColor: '#f4511e' } }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
