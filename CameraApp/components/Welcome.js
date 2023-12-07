import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native'; // okrągła animacja ładowania
import * as Font from "expo-font";

import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


export default function Welcome(props) {

    const [fontsLoaded] = useFonts({
        'Inter-Black': require('../assets/Inter-Black.otf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
            <TouchableOpacity onPress={() => { props.navigation.navigate("gallery") }} >
                <Text style={{ fontFamily: 'Inter-Black', fontSize: 30 }}>CAMERA APP</Text>
                <Text style={{ fontSize: 30 }}>My gallery app</Text>

            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});