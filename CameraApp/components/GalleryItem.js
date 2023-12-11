import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'

export default function GalleryItem (props) {
  const assets = props.assets
  const width = Dimensions.get('window').width

  const isSelected = props.selected.find((e) => e === assets.id)

  const body = (isSelected)
    ? (
      <TouchableOpacity style={styles.container2} delayLongPress={300} onLongPress={() => { props.selectImg(assets.id) }}>
        <Image style={{ opacity: 0.5 }} outline={5} height={width / props.cols} width={width / props.cols} source={{ uri: assets.uri }} />
        {/* <Text>BANG BANG</Text> */}
      </TouchableOpacity>
      )
    : (
      <TouchableOpacity style={styles.container2} delayLongPress={300} onLongPress={() => { props.selectImg(assets.id) }}>
        <Image height={width / props.cols} width={width / props.cols} source={{ uri: assets.uri }} />
        {/* <Text>BANG BANG</Text> */}
      </TouchableOpacity>
      )

  return body
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    flex: 1,
    backgroundColor: '#b00b69',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container2: {
    padding: 0,
    flex: 1,
    backgroundColor: '#b00b69',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
