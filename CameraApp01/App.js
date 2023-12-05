import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, TouchableOpacity, View } from 'react-native'

import Welcome from './components/Welcome';
import Camera from "./components/Camera"
import Gallery from "./components/Gallery"
import ImgView from "./components/ImgView"

const Stack = createNativeStackNavigator()

export default function App({ navigation }) {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="welcome" component={Welcome} />
                <Stack.Screen name="gallery" component={Gallery} />
                <Stack.Screen name="imgview" component={ImgView} />
                <Stack.Screen name="camera" component={Camera} />
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
