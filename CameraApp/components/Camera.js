import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

import MyButton2 from './myButton2';

export default function Welcome(props) {
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    let camera = ''

    // useEffect(async () => {
    //     try{
    //         let { status } = await Camera.requestCameraPermissionsAsync();
    //         if (status !== 'granted') {
    //             Alert.alert('Permissions to read images were not granted')
    //         }

    //     } catch(e){
    //         console.error(e)
    //     }
    // }, [])

    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    async function snapPicture() {
        let foto = await camera.takePictureAsync()
        let asset = await MediaLibrary.createAssetAsync(foto.uri); // domyślnie zapisuje w folderze DCIM
        alert(JSON.stringify(asset, null, 4))
    }

    if (!permission) return <View />;
    if (!permission.granted) return <Text>brak dostępu do kamery</Text>;

    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={type} ref={ref => {camera = ref}} >
                <View style={styles.buttonContainer}>
                    {/* <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
                        <Text style={styles.text}>Flip Camera</Text>
                    </TouchableOpacity> */}
                    <MyButton2 content="FLIP" handleClick={() => { toggleCameraType() }} ></MyButton2>
                    <MyButton2 content="SNAP" handleClick={() => { snapPicture() }} ></MyButton2>
                </View>
            </Camera>
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
    camera: {
        width: '100%',
        height: '100%',
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        alignContent: 'space-around',
        justifyContent: 'space-around',
        bottom: 0,
        width: '100%'
    }
});