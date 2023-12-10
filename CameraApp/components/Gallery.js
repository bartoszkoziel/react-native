import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Alert, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as MediaLibrary from 'expo-media-library';
import { ToastAndroid } from "react-native";

import MyButton from './myButton';
import GalleryItem from './GalleryItem';

export default function Welcome(props) {

    const [assets, setAssets] = useState('')
    const [numCol, setNumCol] = useState(3)

    const handleRedirect = (str) => {
        switch (str) {
            case "camera":
                props.navigation.navigate("camera")
                break
            case "layout":
                break
            case "delete":
                break
        }
    }

    const getAssets = async () => {
        try {
            const { status } = await MediaLibrary.requestPermissionsAsync()
            if (status !== 'granted') {
                Alert.alert('Permissions to read images were not granted')
            }
            const assets = await MediaLibrary.getAssetsAsync({
                first: 3 * 10,
                mediaType: 'photo',
                sortBy: 'creationTime'
            })
            const map = []
            assets.assets.forEach((e) => map.push({ id: e.id, uri: e.uri, filename: e.filename }))
            console.log(map)
            setAssets(map)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        getAssets()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.buttonRow} >
                <MyButton content="LAYOUT" handleClick={() => { }} ></MyButton>
                <MyButton content="CAMERA" handleClick={() => { handleRedirect("camera") }} ></MyButton>
                <MyButton content="DELETE" handleClick={() => { }} ></MyButton>
            </View>
            <FlatList
                data={assets}
                renderItem={({item}) => <GalleryItem assets={item} />}
                numColumns={numCol}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        // alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    buttonRow: {
        backgroundColor: '#bbbbbb',
        height: 75,
        flexDirection: 'row',
        justifyContent: 'center',
    }
});