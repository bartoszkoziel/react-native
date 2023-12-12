import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Sharing from 'expo-sharing'
import MyButton from './myButton';
import * as MediaLibrary from 'expo-media-library'

export default function Welcome(props) {

  const width = Dimensions.get('window').width
  const height = Dimensions.get('window').height

  const handleDelete = async () => {
    console.log("ID TO DELETE: ", props.route.params.id);
    await MediaLibrary.deleteAssetsAsync([props.route.params.id])
    props.route.params.refresh()
    props.navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <Image outline={5} height={height / 2} width={width / 2} source={{ uri: props.route.params.uri }} />
      <MyButton content="SHARE" handleClick={() => {Sharing.shareAsync(props.route.params.id)}} />
      <MyButton content="DELETE" handleClick={handleDelete} />
      <Text>{props.route.params.height} X {props.route.params.width}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5511CC',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
});