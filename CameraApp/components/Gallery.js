import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as MediaLibrary from 'expo-media-library';


import MyButton from './myButton';

export default function Welcome(props) {

    const getAssets = async () => {
        try {
            const { status } = await MediaLibrary.requestPermissionsAsync()
            if (status !== 'granted') {
                Alert.alert('Permissions to read images were not granted')
            }
            const assets = await MediaLibrary.getAssetsAsync({
                sortBy: 'modificationTime',
                first: 3 * 10,
                mediaType: 'photo'
            })
            const map = new Map()
            assets.assets.forEach((e) => map.set(e.id, { id: e.id, uri: e.uri, filename: e.filename }))
            return map
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        getAssets()
    })

    return (
        <View style={styles.container}>
            <View style={styles.buttonRow} >
                <MyButton content="LAYOUT" handleClick={() => { }} ></MyButton>
                <MyButton content="CAMERA" handleClick={() => { }} ></MyButton>
                <MyButton content="DELETE" handleClick={() => { }} ></MyButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        // alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonRow: {
        flex: 1,
        backgroundColor: '#bbbbbb',
        height: 75,
        flexDirection: 'row',
        justifyContent: 'center',
    }
});