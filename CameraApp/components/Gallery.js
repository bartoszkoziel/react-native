import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Alert, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import * as MediaLibrary from 'expo-media-library'

import MyButton from './myButton'
import GalleryItem from './GalleryItem'

export default function Welcome(props) {
  const [assets, setAssets] = useState('')
  const [numCol, setNumCol] = useState(3)
  const [selectedItems, setSelectedItems] = useState([])

  const handleRedirect = (str) => {
    switch (str) {
      case 'camera':
        props.navigation.navigate('camera')
        break
      case 'layout':
        break
      case 'delete':
        break
    }
  }

  const handleDelete = async () => {
    console.log(selectedItems)
    await MediaLibrary.deleteAssetsAsync(selectedItems)
    setSelectedItems([])
    let temp = numCol
    setNumCol(temp + 1)
    setNumCol(temp)
  }

  const handleImgView = (uri, id) => {
    console.log("chosen pic: ", id);
    props.navigation.navigate("imgview", {id: id, uri: uri, refresh: getAssets})
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

  const toggleLayout = () => {
    if (numCol === 3) setNumCol(1)
    if (numCol === 1) setNumCol(3)
  }

  const selectImg = (id) => {
    const isSelected = selectedItems.find((e) => e === id)
    console.log('IS SELECTED: ', isSelected)
    console.log('ID: ', id)

    if (isSelected === undefined) {
      const temp = selectedItems
      temp.push(id)
      setSelectedItems(temp)
    } else {
      console.log("ALREADY SELECTED (DELETING)")
      // let temp = isSelected.indexOf(isSelected)
      // setSelectedItems(selectedItems.splice(temp,1))
      let temp2 = selectedItems.filter(item => item !== id)
      console.log("LOGGGING TEMP: ", temp2)
      setSelectedItems(temp2)
    }
    let temp = numCol
    setNumCol(temp + 1)
    setNumCol(temp)
    console.log("SELECTED ITEMS: ", selectedItems)
  }

  useEffect(() => {
    getAssets()
  }, [numCol])

  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <MyButton content='LAYOUT' handleClick={() => { toggleLayout() }} />
        <MyButton content='CAMERA' handleClick={() => { handleRedirect('camera') }} />
        <MyButton content='DELETE' handleClick={() => { handleDelete() }} />
      </View>
      <FlatList
        data={assets}
        renderItem={({ item }) => <GalleryItem assets={item} cols={numCol} selectImg={selectImg} selected={selectedItems} imgView={handleImgView}/>}
        numColumns={numCol}
        key={numCol}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    // alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  buttonRow: {
    backgroundColor: '#bbbbbb',
    height: 75,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
