import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

import MyButton2 from './myButton2';
import CameraSettings from './CameraSettings';

export default function CameraPage(props) {
  const [type, setType] = useState(CameraType.back);
  const [cameraInfo, setCameraInfo] = useState(true)
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [isCameraSettings, setCameraSettings] = useState(false)
  const [camera, setCamera] = useState(null)

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  async function snapPicture() {
    let foto = await camera.takePictureAsync()
    let asset = await MediaLibrary.createAssetAsync(foto.uri); // domyślnie zapisuje w folderze DCIM
    alert(JSON.stringify(asset, null, 4))
  }

  function toggleCameraMenu() {
    setCameraSettings(prev => !prev)
  }

  async function getCameraInfo() {

    console.log('getCameraInfo') // Weird await bug
    try {
      const ratios = ["4:3", "16:9", "1:1"]
      console.log('ratios', ratios) // Weird await bug

      // const allSizes = await Promise.all(
      //   ratios.map(async (r) => camera.getAvailablePictureSizesAsync(r)
      //   ))

      let allSizes = []
      ratios.forEach( async (el) => {
        let temp = await camera.getAvailablePictureSizesAsync(el)
        allSizes.push(temp)
      })

      setTimeout(()=>{
        console.log("ALL SIZES: ", allSizes);
        
        const ratioSizesMap = new Map()
        ratios.forEach((r, i) => {
          ratioSizesMap.set(r, allSizes[i])
        })
        const flashMode = camera.props.flashMode
        const whiteBalance = camera.props.whiteBalance
        const ratio = camera.props.ratio
  
        //debug
        console.log("RATIO: ", ratio)
        console.log("ratiomap(ratio): ", ratioSizesMap.get(ratio) )
        //debug
  
        const sizes = ratioSizesMap.get(ratio)
        const size = (sizes.length > 0) ? sizes[sizes.length - 1] : null
  
        setCameraInfo({
          flashMode, whiteBalance, ratio, size, ratioSizesMap
        })
      },1000)

    } catch (e) {
      console.error(e)
    }
  }

  if (!permission) return <View />;
  if (!permission.granted) return <Text>brak dostępu do kamery</Text>;

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={type}
        ref={ref => { setCamera(ref) }}
        onCameraReady={() => { setTimeout(() => { getCameraInfo() }, 5) }}
        ratio={cameraInfo.ratio}
        pictureSize={cameraInfo.size}
        flashMode={cameraInfo.flashMode}
        whiteBalance={cameraInfo.whiteBalance}
      >

        <View style={styles.buttonContainer}>
          {/* <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
                        <Text style={styles.text}>Flip Camera</Text>
                      </TouchableOpacity> */}
          <MyButton2 content="FLIP" handleClick={() => { toggleCameraType() }} ></MyButton2>
          <MyButton2 content="SNAP" handleClick={() => { snapPicture() }} ></MyButton2>
          <MyButton2 content="SETT" handleClick={() => { toggleCameraMenu() }} ></MyButton2>
        </View>
      </Camera>
      <CameraSettings
        show={isCameraSettings}
        setShow={setCameraSettings}
        cameraInfo={cameraInfo}
        setCameraInfo={setCameraInfo}
      />
    </View>
  )
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
// console.log('getCameraInfo') // Weird await bug
// // })
// const flashMode = camera.props.flashMode
// const whiteBalance = camera.props.whiteBalance
// const ratio = camera.props.ratio

// console.log("FLASH: ", flashMode)
// console.log("BALANCE: ", whiteBalance);
// console.log("RATIO: ", ratio)

// // const sizes = ratioSizesMap.get(ratio)
// // const size = (sizes.length > 0) ? sizes[sizes.length - 1] : null
// if (camera) {
//   try {
//     const ratios = (Platform.OS === 'android')
//       ? await camera.getSupportedRatiosAsync()
//       : []
//     // console.log('ratios') // Weird await bug
//     // const allSizes = ratios.map(async (r) => {
//     //     camera.getAvailablePictureSizesAsync(r)
//     // })

//     // const ratioSizesMap = new Map()
//     // ratios.forEach((r, i) => {
//     //     ratioSizesMap.set(r, allSizes[i])

//     setCameraInfo({
//       flashMode, whiteBalance, ratio, size, ratioSizesMap
//     })
//     // "4:3": ["40:30", "80:60", "400:300"]
//   } catch (e) {
//     console.error(e)
//   }
// }